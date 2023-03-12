import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ChatSchema = new Schema({
  message: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const ChatModel = model("Chat", ChatSchema);

export default ChatModel;
