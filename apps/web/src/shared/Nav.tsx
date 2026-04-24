import { NavLink } from "react-router-dom";
import type React from "react";

type ListItemProp = {
  children: React.ReactNode;
};

export default function Navbar() {
  function ListItem({ children }: ListItemProp) {
    return (
      <>
        <li className="text-xl my-3">{children}</li>
      </>
    );
  }

  return (
    <div className="top-1 m-2 sticky flex flex-col border-2 border-solid border-black bg-[#ede3da] rounded-xl max-w-320">
      <div className="h-[98.5vh] flex flex-col">
        <div className="p-5 text-4xl">THE FRONTIERS</div>

        <div className="mx-5">
          <ul>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "underline" : "text-black"
              }
            >
              <ListItem>Home</ListItem>
            </NavLink>
            <NavLink
              to="/handbook"
              end
              className={({ isActive }) =>
                isActive ? "underline" : "text-black"
              }
            >
              <ListItem>Player Handbook</ListItem>
            </NavLink>
            <NavLink
              to="/map"
              end
              className={({ isActive }) =>
                isActive ? "underline" : "text-black"
              }
            >
              <ListItem>Map</ListItem>
            </NavLink>
            <NavLink
              to="/spotlight"
              end
              className={({ isActive }) =>
                isActive ? "underline" : "text-black"
              }
            >
              <ListItem>Town Spotlight</ListItem>
            </NavLink>
            <NavLink
              to="/construction"
              end
              className={({ isActive }) =>
                isActive ? "underline" : "text-black"
              }
            ></NavLink>
          </ul>
        </div>

        <div className="p-5 mt-auto">
          <NavLink to="https://forms.gle/5p4PjUfcBhkS9KR49" end>
            <div className="border-2 border-solid border-black p-5 rounded-xl">
              <p className="text-xl text-center rounded-xl mt-2">
                Apply to join
              </p>
            </div>
          </NavLink>
        </div>
        <div className="px-5 pb-5">
          <NavLink to="https://discord.gg/qCED6JWWdV" end>
            <div className="border-2 border-solid border-black rounded-xl py-5 bg-[#5865F2]">
              <p className="text-xl text-center text-white mt-2">Discord</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
