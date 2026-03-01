import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="p-5 text-4xl">THE FRONTIERS</div>
      <div className="mx-5 flex flex-cols">
        <ul>
          <NavLink to="/" end>
            <li>Home</li>
          </NavLink>
          <NavLink to="/construction" end>
            <li>Player Handbook</li>
          </NavLink>
          <li>Map</li>
          <NavLink to="/spotlight" end>
            <li>Town Spotlight</li>
          </NavLink>
          <li>Server Transaction Log</li>
          <li>Apply to join</li>
        </ul>
      </div>
    </>
  );
}
