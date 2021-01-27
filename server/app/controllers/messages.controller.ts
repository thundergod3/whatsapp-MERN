import { Request, Response } from "express";

import Messages, { MessageChattingI } from "../models/messages.model";

class MessagesController {
	// [GET]
	fetchMessageListChatting = (req: Request, res: Response): void => {
		Messages.find((err: any, data: any): void => {
			if (err) res.status(500).json({ msg: err });
			else res.status(201).json({ messageListChatting: data });
		});
	};

	// [POST]
	postMessageChatting = (req: Request, res: Response): void => {
		const newMessage: any = req.body;

		Messages.create(newMessage, (err: any, data: MessageChattingI): void => {
			if (err) res.status(500).json({ msg: err });
			else res.status(201).json({ msg: "Create new message", message: data });
		});
	};
}

export default new MessagesController();
