
import { connection } from "./connection";
import { pessoas } from "../type/insertEstu";

export const insertDocente = async(pessoas:pessoas): Promise <void> =>{
    await connection("Docente")
    .insert(pessoas)
    
}