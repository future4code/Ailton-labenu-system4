"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const Create_1 = require("./endpoints/Create");
const GetName_1 = require("./endpoints/GetName");
const CreateDocente1_1 = require("./endpoints/CreateDocente1");
const GetDocente_1 = require("./endpoints/GetDocente");
const UpdateTurma_1 = require("./endpoints/UpdateTurma");
app_1.app.post("/create", Create_1.Create);
app_1.app.get("/search/:name", GetName_1.GetName);
app_1.app.put("/editTurma/:name", UpdateTurma_1.UpdateTurma);
app_1.app.post("/CreateDocente1", CreateDocente1_1.CreateDocente1);
app_1.app.get("/GetDocente", GetDocente_1.GetDocente);
//# sourceMappingURL=index.js.map