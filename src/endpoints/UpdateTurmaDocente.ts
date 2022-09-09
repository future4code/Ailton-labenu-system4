import { resolveAny } from "dns";
import { Request, Response } from "express";
import { UpdateDocente } from "../data/UpdateDocente";


export async function UpdateTurmaDocente(req:Request, res:Response):Promise<void>{
    try {
          const byName = req.params.name 
          const byturma = req.body

          if(!byName || !byturma){
            res.statusCode = 400
            throw new Error("Digite todos os campos corretamente")
          }
          const result = await UpdateDocente(byName, byturma.turma_id)

          res.status(200).send(result)

    } catch(error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}