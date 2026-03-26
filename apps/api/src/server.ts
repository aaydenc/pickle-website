import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./db/index.ts";
import { posts } from "./db/schema.ts";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello world");
});

app.get("/api/db/get_posts", async (req: any, res: any) => {
  try {
    const post_list = await db.select().from(posts);
    res.json(post_list);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
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
        user_id: 1,
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
