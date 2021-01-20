const socket_io = require("socket.io");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRECT_KEY;
const { AppError } = require("../helpers/utils.helper");
const Message = require("../models/Message");
const User = require("../models/User");
const Conversation = require("../models/Conversation");
const Clinic = require("../models/Clinic");

const socketTypes = {
  NOTIFICATION: "NOTIFICATION",
  PRIVATE_MSG_INIT: "PRIVATE_MSG_INIT",
  PRIVATE_MSG_SEND: "PRIVATE_MSG_SEND",
  PRIVATE_MSG_RECEIVE: "PRIVATE_MSG_RECEIVE",
  ERROR: "ERROR",
};

const io = socket_io();
const socketApi = {};
socketApi.io = io;

let onlineUsers = {};

io.use((socket, next) => {
  try {
    const tokenString = socket.handshake.query.accessToken;
    console.log(tokenString);
    if (!tokenString)
      return next(
        new AppError(401, "Login required", "socketIO Connection Error")
      );
    const accessToken = tokenString.replace("Bearer ", "");
    jwt.verify(accessToken, JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next(
            new AppError(401, "Token expried", "SocketIO Connection Error")
          );
        } else {
          return next(new AppError(401, "Token is invalid", "Socket"));
        }
      }
      socket.userId = payload._id;
    });
    next();
  } catch (error) {
    next(error);
  }
});

io.on("connection", async function (socket) {
  onlineUsers[socket.userId] = socket.id;

  socket.on(socketTypes.PRIVATE_MSG_INIT, async (msg) => {
    try {
      const fromUser = await User.findById(msg.from);
      const toAdmin = await Clinic.findById(msg.to);
      if (fromUser && toAdmin) {
        let conversation = await Conversation.find({
          users: fromUser._id,
          admins: toAdmin._id,
        });
        if (conversation) {
          let privateMessages = await Message.find({
            conversation: conversation._id,
          })
            .sort({ createdAt: -1 })
            .limit(100)
            .populate("from")
            .populate("to");
          privateMessages = privateMessages.reverse();
          conversation = conversation.toJSON();
          conversation.to = toAdmin;
          io.to(onlineUser[msg.from]).emit(socketTypes.NOTIFICATION, {
            selectedConversation: conversation,
            privateMessages,
          });
        } else {
          conversation = await Conversation.create({
            users: [fromUser._id, toAdmin._id],
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
});

module.exports = socketApi;
