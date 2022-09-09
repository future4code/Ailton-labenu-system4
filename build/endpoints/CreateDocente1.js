"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocente1 = void 0;
const insertDocente_1 = require("../data/insertDocente");
function CreateDocente1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, name, email, data_nasc, turma_id } = req.body;
            if (!id || !name || !email || !data_nasc || !turma_id) {
                res.statusCode = (400);
                throw new Error("Preencha todos os CAMPOS  corretamente");
            }
            const newDocente = {
                id,
                name,
                email,
                data_nasc,
                turma_id
            };
            yield (0, insertDocente_1.insertDocente)(newDocente);
            res.status(201).send("Professor cadastrado com sucesso!");
        }
        catch (error) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    });
}
exports.CreateDocente1 = CreateDocente1;
//# sourceMappingURL=CreateDocente1.js.map