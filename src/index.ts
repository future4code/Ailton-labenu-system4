import { app } from "./app";
import { Create } from "./endpoints/Create";
import { GetName } from "./endpoints/GetName";


app.post("/create", Create)

app.get("/search/:name", GetName)