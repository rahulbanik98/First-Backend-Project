import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//File data Accept gateway
app.use(express.json({ limit: "16kb" }));

// accept data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"))
export { app };
