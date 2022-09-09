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
exports.Create = void 0;
const insertEstudante_1 = require("../data/insertEstudante");
function Create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, name, email, data_nasc, turma_id } = req.body;
            if (!id || !name || !email || !data_nasc || !turma_id) {
                res.statusCode = (400);
                throw new Error("Preencha todos os CAMPOS  corretamente");
            }
            const result = yield (0, insertEstudante_1.insertEstudante)(id, name, email, data_nasc, turma_id);
            res.status(201).send("Estudante cadastrado!!");
        }
        catch (error) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    });
}
exports.Create = Create;
//# sourceMappingURL=Create.js.map