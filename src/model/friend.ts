import { Schema, model } from "mongoose";

const friendSchema = new Schema({
  iduser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  idfriend: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
  },
});

const Friend = model("Friend", friendSchema);
export { Friend };
