import {Request ,Response} from 'express'

export async function getTest(req:Request, res:Response) {
    try {
            res.send("Bom dia Brasilllllll!!!")
    } catch (error:any) {
        
    }
}