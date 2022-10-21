import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { router } from "./src/router/routes";
import { errorHandler } from "./src/middleware/error";
const app = express();
//middle
dotenv.config();
app.use(cors());

// connection
const DB_URL = `mongodb://localhost:27017/md5`;
mongoose.connect(DB_URL).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB Connected error: ${err.message}`);
});
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(bodyParser.json());
// app.use(errorHandler);

app.use("", router);

// app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("sever is running port ", PORT);
});
