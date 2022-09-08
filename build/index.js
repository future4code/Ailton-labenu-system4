"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const getTest_1 = require("./endpoints/getTest");
app_1.app.get("/teste", getTest_1.getTest);
//# sourceMappingURL=index.js.map