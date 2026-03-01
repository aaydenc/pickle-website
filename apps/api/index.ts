import express from "express";
const app = express();
const port = 3001;

const posts = [
  {
    id: 1,
    title: "Welcome to the Spotlight",
    content: "This is epic spotlight post",
    type: "spotlight",
    createdAt: "2026-03-01",
  },
  {
    id: 2,
    title: "Server update",
    content: "This is epic server update",
    type: "spotlight",
    createdAt: "2026-03-01",
  },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
