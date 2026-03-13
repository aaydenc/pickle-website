import express from "express";
import cors from "cors";
import db from "./db";
import { posts } from "./db/schema";

const app = express();
const port = 3000;

app.use(cors);

app.get("/", (req: any, res: any) => {
  res.send("Hello world");
});

app.post("/api/db/create_post", async (req: any, res: any) => {
  try {
    const { post_title, post_content, type } = req.body;

    const result = await db
      .insert(posts)
      .values({
        post_title,
        post_content,
        type,
      })
      .returning();

    res.status(201).json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert post" });
  }
});

app.listen(port, () => {
  console.log("App running on port 3000");
});
