import { NextFunction, Response, Request } from 'express';
import { body } from 'express-validator';
import { ValidateHelper } from '../../../helpers/validate_helper';
import User from '../../../models/User';

const validation = new ValidateHelper
export const validationCreate = [
    body('nombre').notEmpty().withMessage('it can\'t be empty'),
    body('correo').isEmail().withMessage('Email cant be empty')
    .notEmpty().withMessage('it cant be empty')
      .custom(value => {
        if( value !== undefined ){
          return User.findOne({where:{'correo':value}}).then(user => {
            if (user) {
              return Promise.reject('E-mail already in use');
            }
          });
        }
      }),
    body('clave').isLength({min:6}).withMessage('must be at least 6 chars long').notEmpty().withMessage('it cant be empty'),
    body('edad').notEmpty().withMessage('it can\'t be empty')
    .isNumeric().withMessage('must be a number')
    .isInt({min:1}).withMessage('must be a integer value'),
    (req:Request, res:Response, next:NextFunction)=>{
       validation.validateResult(req,res,next);
    }
];