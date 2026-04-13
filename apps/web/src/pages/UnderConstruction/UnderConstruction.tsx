import Navbar from "../../shared/Nav";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex">
      <Navbar />

      <div className="flex flex-col items-center justify-center gap-6 mt-10 w-full">
        <div className="mx-auto w-fit bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:40px_40px] bg-yellow-400 rounded-xl">
          <p className="text-5xl self-center m-5 mt-10 text-white items-center">
            Under Construction
          </p>
          
        </div>
        <p className="text-white">
            <Link to="/">Return Home?</Link>
          </p>
        </div>
        </div>
  
    
  );
}
