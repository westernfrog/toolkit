import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
});

const User = models.User || model("User", testSchema);

export default User;
