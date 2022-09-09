import { app } from "./app";
import { Create } from "./endpoints/Create";
import { GetName } from "./endpoints/GetName";
import {CreateDocente1} from "./endpoints/CreateDocente1";
import {GetDocente} from "./endpoints/GetDocente";
import { UpdateTurma } from "./endpoints/UpdateTurma";
import { CreateTurma } from "./endpoints/CreateTurma";

app.post("/create/turma", CreateTurma)
app.post("/create", Create)
app.get("/search/:name", GetName)
app.put("/editTurma/:name", UpdateTurma)
app.put("/editarTurmaDocente", )
app.post("/CreateDocente1", CreateDocente1)
app.get("/GetDocente", GetDocente)
