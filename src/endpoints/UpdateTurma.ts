import { Request, Response } from "express";
import { PutUpdateTurma } from "../data/PutUpdateTurma";


export async function UpdateTurma(req:Request, res:Response):Promise<void>{
    try {
            const byName = req.params.name
            const byTurma = req.body

             await PutUpdateTurma(byName, byTurma.turma_id)

            res.status(200).send(`O usuário foi trocado de turma`)
    } catch (error) {

    }
}