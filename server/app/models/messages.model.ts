import mongoose from "mongoose";

interface MessageChattingI {
	message: string;
	name: string;
	timestamp: string;
	received: Boolean;
}

type MessageChattingListI = Array<MessageChattingI>;

const Schema = mongoose.Schema;

const messageChattingSchema = new Schema(
	{
		message: String,
		name: String,
		timestamp: String,
		received: Boolean,
	},
	{ timestamps: true }
);

const MessagesChatting = mongoose.model(
	"messagesChatting",
	messageChattingSchema
);

export default MessagesChatting;
export { MessageChattingI, MessageChattingListI };
