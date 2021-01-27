import Pusher from "pusher";

const pusher: Pusher = new Pusher({
	appId: "1144687",
	key: "b6d8fee16d9b680e6616",
	secret: "2260c86f65514e7e4953",
	cluster: "ap1",
	encrypted: true,
});

export default pusher;
