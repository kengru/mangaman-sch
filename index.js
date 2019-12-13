import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";

import work from "./jobs/main";

const app = express();
dotenv.config();

// Error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

cron.schedule("* * * * *", () => {
  work();
});

app.listen(process.env.PORT);