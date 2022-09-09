import { connection } from "./connection";


export async function insertEstudante(id:string, name:string, email:string, data_nasc:string, turma_id:string){
    try {
        const result = await connection.raw(`
        INSERT INTO Estudante (id, name, email , data_nasc, turma_id)
        VALUES ("${id = Math.floor(Date.now() * Math.random()).toString(36)}", 
        "${name}", "${email}", "${data_nasc}", "${turma_id}")
        `)
        return result
    } catch (error) {
        
    }
}