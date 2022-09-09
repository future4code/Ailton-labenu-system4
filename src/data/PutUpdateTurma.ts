import { connection } from "./connection";

export async function PutUpdateTurma(byName:string, byTurma:string){

const result = await connection.raw(`
        UPDATE Estudante
        SET turma_id = "${byTurma}"
        WHERE name = "${byName}"
    `)
  return result

}