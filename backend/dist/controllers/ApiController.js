"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring_1 = __importDefault(require("randomstring"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//Apı Controller using by typescript and prisma 
class ApiController {
    //async function index
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userid = req.body.userid;
            const existingLink = yield prisma.shortener.findMany({
                where: {
                    userid: userid,
                }
            });
            return res.json(existingLink);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userlink = req.body.link;
            const userid = req.body.userid;
            if (!userlink || !userid) {
                return res.status(400).json({ error: "Link or userid is missing" });
            }
            const existingLink = yield prisma.shortener.findUnique({
                where: {
                    link: userlink,
                }
            });
            if (existingLink) {
                return res.status(200).json({
                    link: existingLink.linkid,
                });
            }
            const randomlink = randomstring_1.default.generate({
                length: 8,
                charset: 'alphanumeric'
            });
            try {
                const newLink = yield prisma.shortener.create({
                    data: {
                        link: userlink,
                        linkid: randomlink,
                        userid: userid,
                    }
                });
                return res.status(200).json(newLink);
            }
            catch (err) {
                return res.status(500).json({ error: err });
            }
        });
    }
}
exports.default = new ApiController();
//# sourceMappingURL=ApiController.js.map