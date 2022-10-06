import { NextFunction, Response, Request } from 'express';
import { body } from 'express-validator';
import { ValidateHelper } from '../../../helpers/validate_helper';

const validation = new ValidateHelper
export const validationLogin = [
    body('correo').isEmail().withMessage('Email can\'t be empty')
    .notEmpty().withMessage('it cant be empty'),
    body('clave').notEmpty().withMessage('Clave can\'t be empty'),
    (req:Request, res:Response, next:NextFunction)=>{
       validation.validateResult(req,res,next);
    }
];