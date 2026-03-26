import { useState } from "react";

export default function NewPost() {
  const [post_title, setPostTitle] = useState("");
  const [post_content, setPostContent] = useState("");
  const [type, setType] = useState("");

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/db/create_post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_title,
          post_content,
          type,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();
      console.log("Created:", data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="post-title">Post Title: </label>
        <input
          type="text"
          id="post-title"
          className="mb-10"
          value={post_title}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="post-content">Post Content: </label>
        <textarea
          id="post-content"
          value={post_content}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="post-type">Type: </label>
        <input
          list="types"
          className="ml-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <datalist id="types">
          <option value="notice" />
          <option value="spotlight" />
        </datalist>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
