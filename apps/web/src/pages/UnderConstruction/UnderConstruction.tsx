import { Link } from "react-router";

export default function UnderConstruction() {
  return (
    <>
      <div className="flex flex-col justify-center h-dvh">
        <p className="text-5xl self-center">Under Construction</p>
        <div className="justify-center self-center">
          <Link to="/">
            <p className="my-10">Return Home?</p>
          </Link>
        </div>
      </div>
    </>
  );
}
