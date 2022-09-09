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
exports.getDocenteByEmail = exports.selectDocente = void 0;
const connection_1 = require("./connection");
const selectDocente = () => __awaiter(void 0, void 0, void 0, function* () {
    const docentes = yield (0, connection_1.connection)("CreateDocente1")
        .select("CreateDocente1.id", "CreateDocente1.name", "CreateDocente1.email", "CreateDocente1.data_nasc", "CreateDocente1.turma_id");
    return docentes;
});
exports.selectDocente = selectDocente;
const getDocenteByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const [docente] = yield (0, connection_1.connection)("CreateDocente1")
        .where({ email: email });
    return docente;
});
exports.getDocenteByEmail = getDocenteByEmail;
//# sourceMappingURL=selectDocente.js.map