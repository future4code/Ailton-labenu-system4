import { connection } from "./connection";
import { pessoas } from "../type/insertEstu";

export const selectDocente = async(): Promise <pessoas[]> => {

    const docentes = await connection ("CreateDocente1")
    .select("CreateDocente1.id","CreateDocente1.name",
    "CreateDocente1.email", "CreateDocente1.data_nasc", "CreateDocente1.turma_id")

    return docentes
}

/* Essa função está acessando a tabela "CreateDocente1" para verificar se o email 
já está cadastrado. */
export const getDocenteByEmail = async(email: string): Promise <pessoas[]> => {

    const  [docente]  = await connection("CreateDocente1")
        .where({email: email})

        return docente
}