import { app } from "./app";
import { Create } from "./endpoints/Create";
import { GetName } from "./endpoints/GetName";
import { UpdateTurma } from "./endpoints/UpdateTurma";


app.post("/create", Create)
app.get("/search/:name", GetName)
app.put("/editTurma/:name", UpdateTurma)