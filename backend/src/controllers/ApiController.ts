import { Request,Response } from "express";
import randomstring from 'randomstring'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

//Apı Controller using by typescript and prisma 
class ApiController{
    //async function index
    public async index(req: Request, res: Response): Promise<Response> {

        const userid:string = req.params.userid;

        if(!userid){
            return res.status(400).json({error: "Userid is missing"});
        }
        
        const existingLink = await prisma.shortener.findMany({
            where:{
                userid: userid,
            }
        })

        return res.json(existingLink);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const userlink: string = req.body.link;
        const userid:string = req.body.userid;

        if(!userlink || !userid){
            return res.status(400).json({error: "Link or userid is missing"});
        }

        
        const randomlink:string = randomstring.generate({
            length: 8,
            charset: 'alphanumeric'
        })


        try{
            const newLink = await prisma.shortener.create({
                data:{
                    link: userlink,
                    linkid: randomlink,
                    userid: userid,
                }
            });
            return res.status(200).json(newLink)
        }catch(err){
            return res.status(500).json({error: err})
        }
    }
}

export default new ApiController();

