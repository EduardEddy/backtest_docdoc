import BaseRepository from '../base.repository';

export default class LoginRepository extends BaseRepository {
    constructor(readonly user: any) {
        super(user);
    }

    login = async (correo:string) => await this.user.findOne({where:{correo}});
    
}