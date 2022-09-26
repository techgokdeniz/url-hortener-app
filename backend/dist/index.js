"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
//Routers
const ApiRoutes_1 = __importDefault(require("./routers/ApiRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.Plugins();
        this.routes();
    }
    Plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.json({
                message: 'URL Shortener API is work 🔥'
            });
        });
        this.app.use('/api', ApiRoutes_1.default);
    }
}
const Port = 3000;
const app = new App().app;
app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
});
//# sourceMappingURL=index.js.map