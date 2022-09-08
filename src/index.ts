import { app } from "./app";
import { Create } from "./endpoints/Create";


app.post("/create", Create)