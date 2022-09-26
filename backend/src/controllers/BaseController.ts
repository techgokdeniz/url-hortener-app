import { Request,Response } from "express";
import randomstring from 'randomstring'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

class BaseController{

    public async index(req: Request, res: Response): Promise<Response> {

        return res.json({
            Service: "Shortener",
            Version: "1.0.0",
            Status: "Running 🔥"
        });
    }

    public async redirect(req: Request, res: Response): Promise<any>{

        const linkid:string = req.params.id.toLowerCase();


        if(!linkid){
            return res.status(400).json({error: "Linkid is missing"});
        }

        try{
            const redirectlink = await prisma.shortener.findFirst({
                where:{
                    linkid: linkid,
                }
            })

            if(!redirectlink){
                return res.redirect("http://localhost:3000/");
            }

            await prisma.shortener.update({
                where:{
                   id: redirectlink.id,
                },
                data:{
                    counter: redirectlink.counter + 1,
                }
            })

            return res.redirect(redirectlink.link);
        }
        catch(err){
            return res.status(400).json({error: "Linkid is wrong"});
        }
        

    }

}

export default new BaseController();