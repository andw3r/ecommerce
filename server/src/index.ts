import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import mongoose, { ConnectOptions } from "mongoose";

// routes import
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "http://localhost:3000/", credentials: true }));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);

app.get("*", (req: Request, res: Response) => {
  return res.status(500).json({ message: "Couldn't find" });
});

async function start() {
  try {
    mongoose
      .connect(
        "mongodb+srv://andw3r:19722507@cluster0.lcdpkiz.mongodb.net/",
        // process.env.DBURI as string,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions
      )
      .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT, (err?: any) => {
          if (err) throw err;
          console.log(`>Ready on http://localhost:${process.env.PORT}`);
        });
      })
      .catch((err) => console.log("Error connecting to MongoDB:", err));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();
