import { Router,Request,Response } from "express";
import IRouter from "./RouterInterface";

//Controller
import BaseController from "../controllers/BaseController";

class BaseRoutes implements IRouter{
  
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', BaseController.index);
        this.router.get('/:id', BaseController.redirect);
    }

}

export default new BaseRoutes().router;