import { responses } from '../../helpers/response_error';
import LoginRepository from '../../repositories/auth/auth.repository';
import BaseService from '../base.service';
import bcrypt from 'bcrypt';
import { removePassword } from '../../helpers/remove_password';

export default class LoginService extends BaseService {
    constructor(private readonly loginRepository: LoginRepository) {
        super(loginRepository)
    }

    login = async (entity: any) => {
        try {
            const user = await this.loginRepository.login(entity.correo);
            if(user) {
                const info = await bcrypt.compare(entity.clave, user.clave);
                const data = await removePassword(user)
                if( info ) {
                    return {
                        status:200,
                        data,
                        message:'success'
                    };
                }
            }
            return { message:'Invalid credentials', status:401 };
        } catch (error) {
            return responses(error, `${this.constructor.name} method login`);
        }
    }
}