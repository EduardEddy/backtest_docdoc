import { Request, Response} from 'express';
import User from '../../models/User';
import LoginRepository from '../../repositories/auth/auth.repository';
import LoginService from '../../services/auth/auth.service';
import { matchedData } from 'express-validator';

export default class AuthCtrl {
    private readonly loginService: LoginService;
    constructor() {
        this.loginService = new LoginService( new LoginRepository(User) )
    }

    login = async (req:Request, res:Response) => {
        const body = matchedData(req);
        const user = await this.loginService.login(body);
        if(user.data == null) return res.status(user.status).json({message:user.message});

        return res.status(user.status).json({data:user.data})
    }
}