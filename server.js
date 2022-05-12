// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
  appId: "1408000",
  key: "2eb4dd2d1845dadaadb0",
  secret: "e8010e63fec3be9aa766",
  cluster: "ap2",
  useTLS: true,
});

// middleware
app.use(express.json());
app.use(cors());

// DB Configuration
const connectionURL = `mongodb+srv://faiztherocker:faiztherocker@cluster0.ed9du.mongodb.net/whatsappdb?retryWrites=true&w=majority`;
mongoose.connect(connectionURL);

const db = mongoose.connection;

db.once("open", () => {
  console.log(`DB Connected`);

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    }
  });
});

app.get("/api/health-check", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`I am running on port ${port}`);
});
