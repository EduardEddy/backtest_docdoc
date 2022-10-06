import express, { Application } from 'express';
import * as routes from '../src/routes/index'
import cors from 'cors';

export default class Server {
    public app: Application;
    port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.middleware();
        this.routes();
    }

    listen(): void {
        console.log('aqui')
        this.app.listen(this.port,()=> {
            console.log(`Server run on ${this.port}`)
        });
    }

    middleware(): void {
        this.app.use(express.json());
        this._cors();
    }

    routes(): void {
        this.app.use('/api/users', routes.userRoute);
        this.app.use('/api/login', routes.authRoute);
    }

    _cors = (): void => {
        const options: cors.CorsOptions = {
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false,
        };
        this.app.use(cors(options));
    }
}