import express, { Application, Request, Response } from "express";

class App{

    public app: Application;

    constructor(){
        this.app = express();
        this.routes();
    }

    protected routes(): void{
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Hello World');
        });
    }
}

const Port: number = 3000;
const app = new App().app;
app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
})