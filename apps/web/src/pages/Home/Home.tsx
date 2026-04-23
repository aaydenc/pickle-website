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
          className="h-32 p-2"
        />

        <div className="flex justify-center gap-4">
          <p className="border border-black p-4 rounded-xl text-center max-w-xl">
            Welcome to The Frontiers! <br />
            My name is Pixel, and I own and operate this server for anyone to
            enjoy, completely free of charge. This world has been carefully
            designed to cultivate collaboration, shared history, and slow but
            steady growth. So please, apply today and help us build something
            lasting together.
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
