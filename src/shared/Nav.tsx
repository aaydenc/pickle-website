import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="p-5 text-4xl">THE FRONTIERS</div>
      <div>
        <ul>
          <NavLink to="/" end>
            <li>Home</li>
          </NavLink>
          <NavLink to="/construction" end>
            <li>Player Handbook</li>
          </NavLink>
          <li>Map</li>
          <li>Town Spotlight</li>
          <li>Server Transaction Log</li>
        </ul>
      </div>
    </>
  );
}
