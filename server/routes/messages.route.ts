import { Router } from "express";

import MessagesController from "../app/controllers/messages.controller";

const messagesRouter = Router();

messagesRouter.get("/", MessagesController.fetchMessageListChatting);

messagesRouter.post("/new", MessagesController.postMessageChatting);

export default messagesRouter;
