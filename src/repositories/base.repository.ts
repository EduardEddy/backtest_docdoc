export default class BaseRepository {
    constructor(private readonly model: any) {}
    
    show = async(id:number) => await this.model.findByPk(id);
    
    get = async() => await this.model.findAll();

    create = async(entity:unknown) => await this.model.create(entity);
}