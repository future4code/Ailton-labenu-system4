import { Request, Response } from "express";
import { insertEstudante } from "../data/insertEstudante";

export async function Create(req:Request, res:Response):Promise<void> {
    try {
        const {id, name, email, data_nasc, turma_id} = req.body

        if(!id || !name || !email || !data_nasc || !turma_id){  
            res.statusCode = (400)
            throw new Error("Preencha todos os CAMPOS  corretamente")
        }

        const result  = await insertEstudante(id, name, email, data_nasc, turma_id)

        res.status(201).send("Estudante cadastrado!!")

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}