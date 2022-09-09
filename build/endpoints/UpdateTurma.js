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
exports.UpdateTurma = void 0;
const PutUpdateTurma_1 = require("../data/PutUpdateTurma");
function UpdateTurma(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const byName = req.params.name;
            const byTurma = req.body;
            yield (0, PutUpdateTurma_1.PutUpdateTurma)(byName, byTurma.turma_id);
            res.status(200).send(`O usuário foi trocado de turma`);
        }
        catch (error) {
        }
    });
}
exports.UpdateTurma = UpdateTurma;
//# sourceMappingURL=UpdateTurma.js.map