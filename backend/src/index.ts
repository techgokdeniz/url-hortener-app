import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from 'cors'


//Routers
import ApiRoutes from "./routers/ApiRoutes";
import BaseRoutes from "./routers/BaseRoutes";

class App{

    public app: Application;

    constructor(){
        this.app = express();
        this.Plugins();
        this.routes();
    }

    protected Plugins(): void{
        this.app.use(bodyParser.json());
        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(compression())
        this.app.use(helmet())
        this.app.use(cors())
    }

    protected routes(): void{
        this.app.use('/api', ApiRoutes);
        this.app.use('/', BaseRoutes);
    }
}

const Port: number = 3000;
const app = new App().app;
app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
})