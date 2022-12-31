const express = require("express");
const app = express();
const userRoute = require("./route/users");
const authRoute = require("./route/auth");
const postRoute = require("./route/posts");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

// データベース接続
mongoose
	.connect(process.env.MONGOURL)
	.then(() => {
		console.log("DBと接続中・・・");
	})
	.catch((err) => {
		console.log(err);
	});

// ミドルウェア
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log("サーバーが起動しました"));
