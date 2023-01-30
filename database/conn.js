const MONGO_URI =
  "mongodb+srv://westernfrog:Pottyboy%407483@users.r7xott4.mongodb.net/?retryWrites=true&w=majority";

import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(MONGO_URI);

export default connectMongo;
