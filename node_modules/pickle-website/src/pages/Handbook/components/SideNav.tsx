import { HashLink } from "react-router-hash-link";

export default function SideNav() {
  return (
    <>
      <div className="w-1/4">
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
