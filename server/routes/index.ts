import express, { Express } from "express";

import messagesRouter from "./messages.route";

const routes = (app: Express): void => {
	app.use("/messages", messagesRouter);
};

export default routes;
