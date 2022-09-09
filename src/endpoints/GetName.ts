import { Request, Response } from "express";
import { connection } from "../data/connection";

export  async function GetName (req:Request, res: Response):Promise <void>{

    try {
      const byName = req.params.name
      const result = await connection("Estudante").where("name","like",`${byName}`)
      console.log(result)
    } catch (error:any) {
        
    }
}