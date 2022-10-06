import { responses } from "../helpers/response_error"
import { ResponseInterface } from "../interfaces/response.interface"

export default class BaseService {
    constructor(private readonly repository: any) {}

    get = async():Promise<ResponseInterface> => {
        try {
            const data = await this.repository.get();
            return {
                status: 200,
                message: "success",
                data
            }
        } catch (error) {
            return responses(error, `${this.repository.constructor.name} method get`)
        }
    }

    show = async(id: number):Promise<ResponseInterface> => {
        try {
            const data = await this.repository.show(id);
            return {
                status: 200,
                message: "success",
                data
            }
        } catch (error) {
            return responses(error, `${this.repository.constructor.name} method show`)
        }
    }

    create = async (entity:any):Promise<ResponseInterface> => {
        try {
            await this.repository.create(entity);
            return {
                status:201,
                message: 'success'
            };
        } catch (error) {
            return responses(error, `${this.repository.constructor.name} method create`);
        }
    };
}