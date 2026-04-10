import Navbar from "../../shared/Nav";
import frontier_title from "../../assets/imgs/frontiers_title.png";
import pickle_head from "../../assets/imgs/pickle_head_flipped.png";

export default function Home() {
  return (
    <div className="flex">
      <Navbar />

      <div className="flex flex-col items-center justify-center gap-6 mt-10 w-full">
        <img
          src={frontier_title}
          alt="Blocky text of the frontiers"
          className="h-30 p-2"
        />
        
        <div className="flex justify-center gap-4">
          <p className="border border-black p-4 rounded-xl text-center max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni
            temporibus nesciunt suscipit non veritatis eaque odit corporis eum
            et quo totam ullam, repellat corrupti reiciendis sit voluptates.
            Nam, illum.
          </p>

          <img
            src={pickle_head}
            alt="Pixel's beautiful head"
            className="h-40"
          />
        </div>
        </div>
      </div>
    
  );
}
