"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
        this.Plugins();
    }
    Plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('Hello World');
        });
        this.app.route('/').post((req, res) => {
            res.send(req.body);
        });
    }
}
const Port = 3000;
const app = new App().app;
app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
});
