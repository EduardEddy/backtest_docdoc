import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/User';
import { UserRepository } from '../../repositories/users/user.repository';
import UserService from '../../services/user/user.service';
import { matchedData } from 'express-validator';

export default class UserCtrl {
    private readonly userService: UserService; 
    constructor() {
        this.userService = new UserService( new UserRepository(User) );
    }
    
    index = async (req:Request, res:Response) => {
        const users = await this.userService.get();
        return res.status(users.status).json(users.data)
    }

    show = async (req:Request, res:Response) =>{
        const { id } = req.params
        const user = await this.userService!.show(+id)
        return res.status(user.status).json(user.data ?? {message:user.message})
    }

    create = async (req:Request, res:Response) => {
        const body = matchedData(req);
        body.clave = await bcrypt.hash(body.clave, 10);
        const user = await this.userService.create(body);
        return res.status(user.status).json(user.data ?? {message:user.message})
    }
}