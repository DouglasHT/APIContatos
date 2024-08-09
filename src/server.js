import http from "http";
import express from "express";
import apiRouter from "./api-v1/api-route.js";

const app = express();

app.use("/api/v1", apiRouter);

app.use("/", (req, res) => res.send("-- API Contatos --"));

const porta = 5500;
http
  .createServer(app)
  .listen(porta, () => console.log(`Servidor iniciado na porta ${porta}`));
