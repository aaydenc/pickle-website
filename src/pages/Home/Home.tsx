import Navbar from "../../shared/Nav";
import frontier_title from "../../assets/imgs/frontiers_title.png";
// import frontier_banner from "../../assets/imgs/frontiers_title_banner.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4">
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
      </div>
    </>
  );
}
