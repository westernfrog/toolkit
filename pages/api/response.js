import connectMongo from "../../database/conn";
import User from "../../model/user";

export default async function addText(req, res) {
  try {
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    const value = await User.create(req.body);

    res.json({ value });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
