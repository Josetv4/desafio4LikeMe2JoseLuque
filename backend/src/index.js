import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config.js";
import router from "./routes/postRoutes.js";

const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message + "Ups..algo ocurrio :(",
  });
});

app.listen(PORT, () => {
  console.log(`Estamos Readyyyyy jejeje J.L. http://localhost:${PORT} `);
});
