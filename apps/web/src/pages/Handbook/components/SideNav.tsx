import { HashLink } from "react-router-hash-link";

export default function SideNav() {
  return (
    <>
      <div className="sticky top-5 mx-5 h-fit self-start bg-[#ede3da] border-2 border-solid border-black rounded-xl">
        <div className="m-2 p-2">
          <p className="text-xl">Player Handbook Navigation</p>
          <HashLink smooth to="/handbook/#philosophy" className="text-lg">
            <p>Server Philosophy</p>
          </HashLink>
          <HashLink
            smooth
            to="/handbook/#expectations"
            className="text-lg my-2"
          >
            <p>Community Expectations</p>
          </HashLink>
          <HashLink smooth to="/handbook/#expansion" className="text-lg my-2">
            <p>World Structure & Expansion</p>
          </HashLink>
          <HashLink smooth to="/handbook/#travel" className="text-lg my-2">
            <p>Travel & Teleportation</p>
          </HashLink>
          <HashLink smooth to="/handbook/#towns" className="text-lg my-2">
            <p>Towns & Community Growth</p>
          </HashLink>
          <HashLink smooth to="/handbook/#spotlight" className="text-lg my-2">
            <p>Town Spotlight</p>
          </HashLink>
          <HashLink smooth to="/handbook/#late-game" className="text-lg my-2">
            <p>Villager & Late-Game Balance</p>
          </HashLink>
          <HashLink
            smooth
            to="/handbook/#transparency"
            className="text-lg my-2"
          >
            <p>Transparency</p>
          </HashLink>
          <HashLink smooth to="/handbook/#staff" className="text-lg my-2">
            <p>Staff & Governance</p>
          </HashLink>
          <HashLink smooth to="/handbook/#final" className="text-lg my-2">
            <p>Final Notes</p>
          </HashLink>
          <HashLink smooth to="/handbook/#philosophy" className="text-lg my-2">
            Back to top
          </HashLink>
        </div>
      </div>
    </>
  );
}
