import express from "express";
import pessoaRouter from "./paths/pessoa-router";
import organizacaoRouter from "./paths/organizacao-route";
import tagRouter from "./paths/tag-route";

const apiRouter = express.Router();

apiRouter.use("/tags", tagRouter);
apiRouter.use("/organizacoes", organizacaoRouter);
apiRouter.use("/pessoas", pessoaRouter);
apiRouter.use("/", (req, res, next) => res.send("API V1"));

export default apiRouter;
