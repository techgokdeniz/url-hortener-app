import { Router,Request,Response } from "express";
import IRouter from "./RouterInterface";

//Controller
import ApiController from "../controllers/ApiController";

class ApiRoutes implements IRouter{
  
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/:userid', ApiController.index);
        this.router.post('/', ApiController.create);
    }

}

export default new ApiRoutes().router;