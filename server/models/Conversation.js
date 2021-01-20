const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = Schema({
  users: [{ type: Schema.ObjectId, required: true, ref: "User" }],
  admin: [{ type: Schema.ObjectId, required: true, ref: "Clinic" }],
  lastMessage: {
    type: String,
    required: false,
    default: "",
  },
  lastMessageUpdatedAt: { type: Date, required: false },
});

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
