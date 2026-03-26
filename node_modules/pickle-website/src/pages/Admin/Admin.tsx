import { useState } from "react";
import PostCard from "./Components/PostCard";
import NewPost from "./Components/NewPost";

export default function Admin() {
  const [hidden, noHidden] = useState(false);

  function openNewPostPopup() {
    noHidden(!hidden);
  }

  return (
    <>
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1 col-start-2 mt-10 justify-self-center">
          <p>Posts:</p>
          <p>
            <PostCard />
          </p>
        </div>
        <div className="col-span-1 col-start-3 mt-10">
          <button onClick={openNewPostPopup}>New post</button>
        </div>
        {hidden && <NewPost />}
      </div>
    </>
  );
}
