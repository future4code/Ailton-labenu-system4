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
exports.GetDocente = void 0;
const selectDocente_1 = require("../data/selectDocente");
const GetDocente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docentes = yield (0, selectDocente_1.selectDocente)();
        if (docentes.length < 1) {
            res.statusCode = 404;
            throw new Error("Não existem professores!");
        }
        res.status(200).send(docentes);
    }
    catch (error) {
        res.status(500).send({});
    }
});
exports.GetDocente = GetDocente;
//# sourceMappingURL=GetDocente.js.map