import express from "express";

const tagRouter = express.Router();

tagRouter.use("/", (req, res, next) => res.send("ENDPOINT TAG"));

export default tagRouter;
