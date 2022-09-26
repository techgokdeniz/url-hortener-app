"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Controller
const ApiController_1 = __importDefault(require("../controllers/ApiController"));
class ApiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', ApiController_1.default.index);
        this.router.post('/', ApiController_1.default.create);
    }
}
exports.default = new ApiRoutes().router;
//# sourceMappingURL=ApiRoutes.js.map