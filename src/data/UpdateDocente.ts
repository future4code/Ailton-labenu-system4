import { connection } from "./connection";

export async function UpdateDocente(byName:string, byturma:String){

    const result = await connection.raw(`
        UPDATE Docente
        SET turma_id = "${byturma}"
        WHERE name =  "${byName}"
    `)
    return result
}