import { HashLink } from "react-router-hash-link";

export default function SideNav() {
  return (
    <>
      <div className="sticky top-5 ml-5 h-1/2 self-start bg-[#ede3da] border-2 border-solid border-black rounded-xl">
        <div className="m-2">
          <HashLink smooth to="/handbook/#philosophy" className="text-lg">
            <p>Server Philosophy</p>
          </HashLink>
          <HashLink smooth to="/handbook/#expectations" className="text-lg">
            <p>Community Expectations</p>
          </HashLink>
          <HashLink smooth to="/handbook/#expansion" className="text-lg">
            <p>World Structure & Expansion</p>
          </HashLink>
          <HashLink smooth to="/handbook/#travel" className="text-lg">
            <p>Travel & Teleportation</p>
          </HashLink>
        </div>
      </div>
    </>
  );
}
