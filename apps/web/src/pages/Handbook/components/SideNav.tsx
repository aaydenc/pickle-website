import { HashLink } from "react-router-hash-link";

export default function SideNav() {
  return (
    <>
      <div className="sticky top-5 mx-5 h-fit self-start bg-[#ede3da] border-2 border-solid border-black rounded-xl">
        <div className="m-2 p-2">
          <p className="text-xl">Player Handbook Navigation</p>
          <HashLink smooth to="/handbook/#welcome" className="text-lg">
            <p className="my-2">Welcome</p>
          </HashLink>
          <HashLink
            smooth
            to="/handbook/#expectations"
            className="text-lg my-2"
          >
            <p className="my-2">Community Expectations</p>
          </HashLink>
          <HashLink smooth to="/handbook/#expansion" className="text-lg my-2">
            <p className="my-2">World Expansion</p>
          </HashLink>
          <HashLink smooth to="/handbook/#travel" className="text-lg my-2">
            <p className="my-2">Player Travel</p>
          </HashLink>
          <HashLink smooth to="/handbook/#towns" className="text-lg my-2">
            <p className="my-2">Towns & Town Spotlight</p>
          </HashLink>
          <HashLink
            smooth
            to="/handbook/#gameplay-changes"
            className="text-lg my-2"
          >
            <p className="my-2">Gameplay Changes</p>
          </HashLink>

          <HashLink smooth to="/handbook/#staff" className="text-lg my-2">
            <p>Server Staff</p>
          </HashLink>
          <HashLink
            smooth
            to="/handbook/#transparency"
            className="text-lg my-2"
          >
            <p className="my-2">Transparency</p>
          </HashLink>
          <HashLink smooth to="/handbook/#final" className="text-lg my-2">
            <p className="my-2">Final Notes</p>
          </HashLink>
          <HashLink smooth to="/handbook/#credits" className="text-lg my-2">
            <p className="my-2">Credits</p>
          </HashLink>
          <HashLink smooth to="/handbook/#welcome" className="text-lg my-2">
            Back to top
          </HashLink>
        </div>
      </div>
    </>
  );
}
