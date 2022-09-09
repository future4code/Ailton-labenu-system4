import { connection } from "./connection";


export async function InsertTurma(id:string, name:string, modulo:number){

    await connection.raw(`
        INSERT Turma (id, name , modulo)
        VALUES("${id = Math.floor(Date.now() * Math.random()).toString(36)}", "${name}", ${modulo})
    `)

}