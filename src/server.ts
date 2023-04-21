import express from "express";
import "./shared/container";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(3000, () => console.log("🚀 Server running..."));