import Navbar from "../../shared/Nav";
import SideNav from "./components/SideNav";
import BulletItem from "./components/BulletItem";
import { useState } from "react";

export default function Handbook() {
  const [sideBar, showSideBar] = useState(false);
  const [navBar, hideNavBar] = useState(true);

  function hideNavs() {
    showSideBar(!sideBar);
    hideNavBar(!navBar);
  }

  return (
    <>
      <div>
        <button onClick={hideNavs}>Click</button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {navBar && (
          <div className="col-span-1">
            <Navbar />
          </div>
        )}
        {sideBar && (
          <div className="col-span-1">
            <SideNav />
          </div>
        )}
        <div className="col-span-2 justify-items-center col-start-2 bg-[#ede3da] p-5 border-2 border-solid border-black rounded-xl">
          <p className="text-3xl text-center" id="philosophy">
            Server Philosophy
          </p>
          <p className="my-2">
            This server is intentionally designed as a long-term world.{" "}
          </p>
          <p>
            It starts small and expands slowly as the community grows. The goal
            is to create density, shared infrastructure, and meaningful history,
            not isolation or speedrunning.
          </p>
          <p className="my-5">
            Systems such as travel costs and the diamond economy are
            intentionally structured to encourage cooperation, town-building,
            and long-term progression.
          </p>
          <ul>
            <li className="mb-2">There are no seasons.</li>
            <li className="mb-2"> There are no resets.</li>
            <li className="mb-2">This world grows outward over time.</li>
          </ul>
          <p>
            If you’re looking for a fast-paced, high-chaos environment, this may
            not be the right server for you.
          </p>
          <p className="my-2">
            If you’re looking to build something lasting with others, welcome.
          </p>

          <p className="text-3xl text-center" id="expectations">
            Community Expectations
          </p>
          <p className="my-2">
            This server is community-driven and long-term. The following
            expectations are fundamental:{" "}
          </p>
          <ul className="space-y-1">
            <BulletItem>Respect other players and their time.</BulletItem>
            <BulletItem>
              No griefing, stealing, or exploitation of other players.
            </BulletItem>
            <BulletItem>
              No x-ray, duping, or unintended mechanics abuse.
            </BulletItem>
            <BulletItem>No harassment or targeted toxicity.</BulletItem>
            <BulletItem>
              Disagreements are handled calmly and respectfully.
            </BulletItem>
            <BulletItem>
              No abuse of loopholes or “gray-area” mechanics.
            </BulletItem>
            <BulletItem>
              Free speech is allowed and encouraged, as long as it is used
              respectfully.
            </BulletItem>
          </ul>
          <p>
            Moderators cannot issue permanent bans. Major decisions are sent to
            review by an admin or the owner to ensure fairness and consistency.
            This server prioritizes stability over speed of judgment.
          </p>
          <p className="text-3xl text-center my-3" id="expansion">
            World Structure & Expansion
          </p>
          <p>The world begins with a limited border.</p>
          <ul>
            <BulletItem>Initial border: 5,000 x 5,000</BulletItem>
            <BulletItem>Expands periodically as the community grows</BulletItem>
            <BulletItem>Border expansions are planned, not reactive</BulletItem>
          </ul>
          <p>This is done to:</p>
          <ul>
            <BulletItem>Prevent early player scattering.</BulletItem>
            <BulletItem>Encourage town formation.</BulletItem>
            <BulletItem>Create meaningful infrastructure.</BulletItem>
            <BulletItem>Preserve long-term history.</BulletItem>
          </ul>
          <p className="mb-5">Expansion is part of the server’s identity.</p>
          <p className="text-3xl text-center mb-2" id="travel">
            Travel & Teleportation
          </p>
          <p>Travel is intentionally designed with light friction.</p>
          <p className="text-2xl my-2">Physical Travel</p>
          {/* Not sure whether this should be centered ^ (will ask big boss man for opinion) */}
          <p>The following changes will be made for physical travel:</p>
          <ul>
            <BulletItem>
              Minecarts will be equal to the speed of a boat on packed ice
            </BulletItem>
            <BulletItem>
              Rocket boosting with elytra will be permanently disabled
            </BulletItem>
            <BulletItem>
              Nether Highways are encouraged, and will be treated as
              player-built infrastructure
            </BulletItem>
          </ul>
          <p className="text-2xl my-2">Command Teleports</p>
          <p>
            The following commands cost{" "}
            <span className="font-bold">1 diamond</span> from your wallet:
          </p>
          <ul className="mb-5">
            <BulletItem>/spawn</BulletItem>
            <BulletItem>/home</BulletItem>
            <BulletItem>/tpa (player-to-player teleport)</BulletItem>
          </ul>
          <p className="mb-5">These commands also have cooldowns.</p>
          <p>This system encourages:</p>
          <ul>
            <BulletItem>Roads</BulletItem>
            <BulletItem>Rail networks</BulletItem>
            <BulletItem>Player-built infrastructure</BulletItem>
            <BulletItem>Physical exploration</BulletItem>
          </ul>
        </div>
      </div>
    </>
  );
}
