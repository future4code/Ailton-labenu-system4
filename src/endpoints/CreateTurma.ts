import { Request, Response } from "express";
import { InsertTurma } from "../data/InsertTurma";

export async function CreateTurma(req:Request, res:Response):Promise<void>{
    try {
        const {id, name, modulo} = req.body

        if(!id || !name || !modulo){
            res.statusCode  = 400
            throw new Error("Digite todos o campos corretamente")
        }

        const result = await InsertTurma(id, name, modulo)

        res.status(201).send(result)
    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}