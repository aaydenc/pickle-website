import Navbar from "../../shared/Nav";
import frontier_title from "../../assets/imgs/frontiers_title.png";
import pickle_head from "../../assets/imgs/pickle_head_flipped.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Navbar />
        </div>
        <div className="col-span-3 place-self-center">
          <img
            src={frontier_title}
            alt="Blocky text of the frontiers"
            className="h-30 p-2"
          />
        </div>
        <div className="col-span-3 col-start-2 place-self-center">
          <p className="border border-solid border-black p-2 rounded-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nisi, exercitationem ducimus expedita voluptatem quas error sed
            aspernatur eligendi, itaque, vero aliquam illum a! Quis deserunt
            sequi eum eius beatae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit sunt tenetur nostrum. Natus adipisci rerum
            porro. Ratione iusto temporibus non nemo unde facere dolor quam ab
            laborum illo! Sequi, eaque?
          </p>
        </div>
        <div className="col-span-1 col-start-5 content-center">
          <img
            src={pickle_head}
            alt="Pixel's beautifal head"
            className="h-40"
          />
        </div>
      </div>
    </>
  );
}
