import Navbar from "../../shared/Nav";

export default function Spotlight() {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Navbar />
        </div>
        <div className="col-start-2 col-span-3 justify-self-center">
          <p className="text-5xl my-5">Town Spotlight</p>
        </div>
      </div>
    </>
  );
}
