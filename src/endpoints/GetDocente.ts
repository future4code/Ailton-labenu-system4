import { selectDocente } from "../data/selectDocente";
import { Request, Response } from "express";

export  const GetDocente = async (req:Request, res: Response):Promise <void> =>{

    try {
      const docentes = await selectDocente()

      if(docentes.length < 1) {
        res.statusCode = 404
        throw new Error("Não existem professores!");
      }

      res.status(200).send(docentes)
    } catch (error) {
        res.status(500).send({
      
        });
    }
}
