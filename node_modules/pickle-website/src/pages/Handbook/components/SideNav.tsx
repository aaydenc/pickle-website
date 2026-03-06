import { HashLink } from "react-router-hash-link";

export default function SideNav() {
  return (
    <>
      <div className="sticky top-5 ml-5 h-1/2 self-start bg-[#ede3da] border-2 border-solid border-black rounded-xl">
        <HashLink smooth to="/handbook/#philosophy">
          <p>Server Philosophy</p>
        </HashLink>
        <HashLink smooth to="/handbook/#expectations">
          <p>Community Expectations</p>
        </HashLink>
        <HashLink smooth to="/handbook/#expansion">
          <p>World Structure & Expansion</p>
        </HashLink>
        <HashLink smooth to="/handbook/#travel">
          <p>Travel & Teleportation</p>
        </HashLink>
      </div>
    </>
  );
}
