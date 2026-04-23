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
    <div className="sticky top-1 m-2 h-screen flex flex-col border-2 border-solid border-black bg-[#ede3da] rounded-xl">
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

      <div className="mt-auto p-5">
        <NavLink
          to="https://forms.gle/5p4PjUfcBhkS9KR49"
          end
          className={({ isActive }) => (isActive ? "underline" : "text-black")}
        >
          <p className="text-xl border-2 border-solid border-black p-5 text-center rounded-xl">
            Apply to join
          </p>
        </NavLink>
      </div>
    </div>
  );
}
