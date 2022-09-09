import { app } from "./app";
import { Create } from "./endpoints/Create";
import { GetName } from "./endpoints/GetName";
import {CreateDocente1} from "./endpoints/CreateDocente1";
import {GetDocente} from "./endpoints/GetDocente";


app.post("/create", Create)

app.get("/search/:name", GetName)

app.post("/CreateDocente1", CreateDocente1)

app.get("/GetDocente", GetDocente)