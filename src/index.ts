import { app } from "./app";
import { getTest } from "./endpoints/getTest";


app.get("/teste", getTest)