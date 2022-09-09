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
exports.insertEstudante = void 0;
const connection_1 = require("./connection");
function insertEstudante(id, name, email, data_nasc, turma_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield connection_1.connection.raw(`
        INSERT INTO Estudante (id, name, email , data_nasc, turma_id)
        VALUES ("${id = Math.floor(Date.now() * Math.random()).toString(36)}", 
        "${name}", "${email}", "${data_nasc}", "${turma_id}")
        `);
            return result;
        }
        catch (error) {
        }
    });
}
exports.insertEstudante = insertEstudante;
//# sourceMappingURL=insertEstudante.js.map