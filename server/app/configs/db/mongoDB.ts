import mongoose, { connect } from "mongoose";

const connectDB = (): Promise<any> =>
	mongoose.connect(
		"mongodb+srv://cong1:cong123@cluster0.nzatt.mongodb.net/whatsapp-MERN",
		{
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);

export default connectDB;
