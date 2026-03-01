import Navbar from "../../shared/Nav";
import { fetchPosts } from "../../utils/fetchPosts";
import { useEffect, useState } from "react";

export default function Spotlight() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Navbar />
        </div>
        <div className="col-start-2 col-span-3 justify-self-center">
          <p className="text-5xl my-5">Town Spotlight</p>
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="border border-solid border-block my-2 p-2 rounded-xl"
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>{post.createdAt}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
