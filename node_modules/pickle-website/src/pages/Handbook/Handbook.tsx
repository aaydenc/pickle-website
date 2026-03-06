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
          <p className="text-2xl my-2">Cardinal Warp System (CWS)</p>
          <p>At Month 6 (20,000 border), the Cardinal Warp System will open.</p>
          <p className="my-2">
            This system allows teleportation from spawn to 4 fixed warp plates
            located 10,000 blocks away in each cardinal direction.
          </p>
          <p>
            These warp points are permanent and will not expand further outward.
          </p>
          <p className="my-2">Their purpose is to: </p>
          <ul>
            <BulletItem>Encourage distant regional development</BulletItem>
            <BulletItem>Support large-scale town growth</BulletItem>
            <BulletItem>Maintain infrastructure relevance</BulletItem>
          </ul>
          <p>Beyond those warp points, physical travel is required.</p>
          <p className="text-3xl text-center my-2" id="towns">
            Towns & Community Growth
          </p>
          <p>Towns are strongly encouraged but not mandatory.</p>
          <p className="my-2">
            The server is designed to reward density and cooperation. Building
            near others creates:
          </p>
          <ul>
            <BulletItem>Trade opportunities</BulletItem>
            <BulletItem>Infrastructure growth</BulletItem>
            <BulletItem>Cultural identity</BulletItem>
            <BulletItem>Spotlight eligibility</BulletItem>
          </ul>
          <p className="my-2 mb-4">
            Isolation is allowed but interaction is rewarded.
          </p>
          <p className="text-3xl text-center my-2" id="economy">
            Economy Overview
          </p>
          <p className="my-2">
            The economy is diamond-backed and community-driven.
          </p>
          <p className="my-2">Diamonds are the base currency.</p>
          <p className="my-2">There are no server-generated currencies.</p>
          <p className="my-2">There are no admin-injected resources.</p>
          <p className="my-2">All wealth originates from player effort.</p>
          <p className="text-2xl my-2">Wallet System</p>
          <p className="my-2">
            Diamonds can be deposited into your wallet. This is secure and fixed
            to your account, and will not be lost on death.
          </p>
          <p className="text-1xl font-bold">Deposit Methods:</p>
          <p className="my-2">1. Command Deposit</p>
          <ul>
            <BulletItem>Anywhere</BulletItem>
            <BulletItem>Maximum 32 diamonds</BulletItem>
            <BulletItem>15-minute cooldown</BulletItem>
            <BulletItem>No tax</BulletItem>
          </ul>
          <p className="my-2">2. Deposit Pont</p>
          <ul>
            <BulletItem>Unlimited deposit</BulletItem>
            <BulletItem>5% tax</BulletItem>
            <BulletItem>No cooldown</BulletItem>
          </ul>
          <p className="my-2">
            Withdrawals follow the same structure (no tax on withdrawals).
          </p>
          <p className="my-2 text-2xl">The 5% Tax & The World Fund</p>
          <p className="my-2 text-xl">
            All deposit point taxes go into the
            <span className="font-bold"> World Fund</span>.
          </p>
          <p className="my-2">The World Fund exists to:</p>
          <ul>
            <BulletItem>Fund community events</BulletItem>
            <BulletItem>Provide event rewards</BulletItem>
            <BulletItem>Support public builds</BulletItem>
            <BulletItem>
              Ensure staff do not need to rely on Creative Mode for community
              events
            </BulletItem>
            <BulletItem>
              Circulate Diamonds back into the server economy
            </BulletItem>
          </ul>
          <p className="my-2">
            Staff are not expected to spend their own diamonds on community
            events.
          </p>
          <p className="my-2">
            All World Fund transactions will be publicly logged on the website
            for full transparency.
          </p>
          <p className="text-3xl text-center my-2" id="shops">
            Shops & Trade
          </p>
          <p className="my-2">Shops are player-created</p>
          <p className="my-2">Opening a shop requires:</p>
          <ul>
            <BulletItem>An apllication</BulletItem>
            <BulletItem>A one-time diamond fee (32 diamonds)</BulletItem>
            <BulletItem>Moderator approval</BulletItem>
          </ul>
          <p className="my-2">This ensures:</p>
          <ul>
            <BulletItem>Quality control</BulletItem>
            <BulletItem>Fair placement</BulletItem>
            <BulletItem>Avoidance of economic chaos</BulletItem>
          </ul>
          <p className="my-2">Player trade is encouraged</p>
          <p className="my-2">
            Monopolies may be moderated if harmful to server balance.
          </p>
          <p className="text-3xl text-center my-2" id="spotlight">
            Town Spotlight
          </p>
          <p className="my-2">
            Each month, towns may apply for the Town Spotlight.
          </p>
          <p className="my-2">Requirements include:</p>
          <ul>
            <BulletItem>Safe teleport location</BulletItem>
            <BulletItem>Clear infrastructure</BulletItem>
            <BulletItem>Moderator approval</BulletItem>
            <BulletItem>
              32 diamond application fee (refunded if unsuccessful)
            </BulletItem>
          </ul>
          <p className="my-2">Players vote on the spotlight town.</p>
          <p className="my-2">If selected:</p>
          <ul>
            <BulletItem>First teleport to the town is free</BulletItem>
            <BulletItem>Subsequent teleports cost 3 diamonds</BulletItem>
            <BulletItem>
              All teleport income goes to the spotlighted town at month’s end
            </BulletItem>
          </ul>
          <p className="my-2">The spotlight exists to:</p>
          <ul>
            <BulletItem>Encourage town beautification</BulletItem>
            <BulletItem>Promote trade</BulletItem>
            <BulletItem>Drive exploration</BulletItem>
            <BulletItem>Reward active communities</BulletItem>
          </ul>
          <p className="my-2">Towns cannot win consecutively.</p>
          <p className="text-3xl text-center my-2" id="late-game">
            Villager & Late-Game Balance
          </p>
          <p className="my-2">
            Certain vanilla mechanics may be adjusted to preserve:
          </p>
          <ul>
            <BulletItem>Economic balance</BulletItem>
            <BulletItem>Player interdependence</BulletItem>
            <BulletItem>Long-term progression</BulletItem>
          </ul>
          <p className="my-2">Examples may include:</p>
          <ul>
            <BulletItem>Villager trade limitations</BulletItem>
            <BulletItem>Elytra travel adjustments</BulletItem>
            <BulletItem>Exploit prevention</BulletItem>
          </ul>
          <p className="my-2">
            Any mechanical adjustments will be documented clearly.
          </p>
          <p className="text-3xl text-center my-2" id="staff">
            Staff & Goverance
          </p>
          <p className="my-2">Moderators:</p>
          <ul>
            <BulletItem>Handle reports</BulletItem>
            <BulletItem>Issue temporary actions</BulletItem>
            <BulletItem>Send cases to review</BulletItem>
          </ul>
          <p className="my-2">Admins/Owner:</p>
          <ul>
            <BulletItem>Make final disciplinary decisions</BulletItem>
            <BulletItem>Oversee economic systems</BulletItem>
            <BulletItem>Maintain server stability</BulletItem>
          </ul>
          <p className="my-2">
            Staff are expected to act calmly, fairly, and transparently.
          </p>
          <p className="text-3xl text-center my-2" id="transparency">
            Transparency
          </p>
          <p className="my-2">This server values openness.</p>
          <p className="my-2">Publicly available information will include:</p>
          <ul>
            <BulletItem>World Fund transaction log</BulletItem>
            <BulletItem>Major policy changes</BulletItem>
            <BulletItem>Border expansion timeline</BulletItem>
            <BulletItem>Town spotlight archive</BulletItem>
          </ul>
          <p className="my-2">Trust is built through clarity.</p>
          <p className="text-3xl text-center" id="final">
            Final Notes
          </p>
          <p className="my-2">This server is built slowly and deliberately.</p>
          <p className="my-2">It is not designed for:</p>
          <ul>
            <BulletItem>Speedrunning the End in week one</BulletItem>
            <BulletItem>Isolated megabases at 50,000 blocks</BulletItem>
            <BulletItem>Hyper-competitive chaos</BulletItem>
          </ul>
          <p className="my-2">It is designed for:</p>
          <ul>
            <BulletItem>Shared growth</BulletItem>
            <BulletItem>Long-term builds</BulletItem>
            <BulletItem>Infrastructure</BulletItem>
            <BulletItem>Stability</BulletItem>
          </ul>
          <p className="my-2">
            If that resonates with you, you’re exactly who this world is for.
          </p>
        </div>
      </div>
    </>
  );
}
