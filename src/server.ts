import express from "express";
import "./shared/container";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("🚀 Server running..."));