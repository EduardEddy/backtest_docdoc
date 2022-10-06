import { UserRepository } from '../../repositories/users/user.repository';
import BaseService from '../base.service';

export default class UserService extends BaseService {
    constructor(private readonly userRepository: UserRepository) {
        super(userRepository);
    }
}