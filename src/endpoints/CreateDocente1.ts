import { pessoas } from '../type/insertEstu';
import { Request, Response } from "express";
import { insertDocente } from "../data/insertDocente";

export async function CreateDocente1(req:Request, res:Response):Promise<void> {
    try {
        const {id, name, email, data_nasc, turma_id} = req.body

        if(!id || !name || !email || !data_nasc || !turma_id){  
            res.statusCode = (400)
            throw new Error("Preencha todos os CAMPOS  corretamente")
        }

        

        // const nameDocente = await getDocente(name)

        // if(nameDocente) {
        //     res.statusCode = 409
        //     throw new Error("Este Professor já está cadastrado")
        // }
        const newDocente: pessoas = {
            id,
            name,
            email,
            data_nasc,
            turma_id
        }

        await insertDocente(newDocente)

        res.status(201).send("Professor cadastrado com sucesso!")

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}