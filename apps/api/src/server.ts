const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello world");
});

app.post("/api/db/create_post", (req: any, res: any) => {});

app.listen(port, () => {
  console.log("App running on port 3000");
});
