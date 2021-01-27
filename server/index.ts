import express, { Express, json } from "express";
import mongoose from "mongoose";
import cors from "cors";

import connectDB from "./app/configs/db/mongoDB";
import pusher from "./app/configs/pusherConfig";
import routes from "./routes/";

const app: Express = express();

// Connect DB
connectDB();

const db = mongoose.connection;
db.once("open", () => {
	const messagesCollection = db.collection("messageschattings");
	const changesStream = messagesCollection.watch();

	changesStream.on("change", (change) => {
		if (change.operationType === "insert") {
			const messageDetails = change.fullDocument;
			pusher.trigger("messages", "inserted", {
				name: messageDetails.name,
				message: messageDetails.message,
				timestamp: messageDetails.timestamp,
				received: messageDetails.received,
			});
		} else {
			console.log("Error triggering Pusher");
		}
	});
});

// Middleware
app.use(express.urlencoded());
app.use(json());
app.use(cors());

// Routes
routes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server start at port ${PORT}`));
