export type pessoas = {
    id:string,
    name:string,
    email:string,
    data_nasc:string,
    turma_id:string
}

export enum Modules {
    mod0 = 0,
    mod1 = 1,
    mod2 = 2,
    mod3 = 3,
    mod4 = 4,
    mod5 = 5,
    mod6 = 6
}


export type Turma = {
    Id_Class: number,
    Turma_Name: string,
    Initial_Date: string,
    Final_Date: string,
    Module: number
}

export enum TurmaName {
    AILTON = 'AILTON',
    FREITE = 'FREIRE',
    JUCA = 'JUCA',
    LULU = 'LULU',
    CHAVES = 'CHAVES'
}