import { Link } from "react-router";

export default function UnderConstruction() {
  return (
    <>
      <div className="flex flex-col justify-center h-dvh">
        <div className="mx-auto w-fit bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:40px_40px] bg-yellow-400 rounded-xl">
          <p className="text-5xl self-center m-5 text-white">
            Under Construction
          </p>
          <div className="justify-center self-center">
            <Link to="/">
              <p className="my-10 text-center text-white">Return Home?</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
