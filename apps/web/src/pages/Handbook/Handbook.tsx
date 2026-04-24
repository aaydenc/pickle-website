import Navbar from "../../shared/Nav";
import SideNav from "./components/SideNav";
import BulletItem from "./components/BulletItem";

export default function Handbook() {
  return (
    <>
      <div className="flex gap-4">
        <div className="mt-3 w-[340px]">
          <Navbar />
        </div>
        <div className="flex-1 justify-items-center bg-[#ede3da] p-5 border-2 border-solid border-black rounded-xl mt-5">
          <p className="text-center text-3xl my-5" id="welcome">
            Welcome to The Frontiers!
          </p>
          <p className="mt-2 mb-5">
            Welcome everybody to The Frontiers, a vanilla server for Minecraft
            Java!
          </p>
          <p className="my-2">It only has one goal:</p>
          <p className="my-2">
            To be a long-lasting, community focused environment dedicated to
            preserving its own history and players.
          </p>
          <p className="my-2">Everything available to you is intentional.</p>
          <ul className="my-2">
            <BulletItem>There are no seasons</BulletItem>
            <BulletItem>There are no world resets</BulletItem>
            <BulletItem>The world grows with its community</BulletItem>
          </ul>
          <p>
            I hope to provide a warm and welcoming place for everybody to come
            back to, be creative, and socialize.
          </p>
          <p className="mb-40">Enjoy everybody!</p>

          <p className="text-3xl text-center mt-10 mb-5" id="expectations">
            Community Expectations
          </p>
          <p className="my-2">
            With a server that is dedicated to its own community and longevity,
            there are some expectations for the community that is fundamental to
            keeping this server running:
          </p>
          <ul>
            <BulletItem>Respect other players and their time.</BulletItem>
            <BulletItem>
              No griefing, or exploitation of other players.
            </BulletItem>
            <BulletItem>
              No x-ray, duping, or abuse of unintended mechanics.
            </BulletItem>
            <BulletItem>No harassment or targeted toxicity.</BulletItem>
            <BulletItem>
              All disagreements must be handled calmly and respectfully.
            </BulletItem>
            <BulletItem>
              There is no abuse of "grey-areas" or loopholes in the rules or
              mechanics.
            </BulletItem>
            <BulletItem>
              Free speech is allowed, and encouraged, as long as it remains
              completely respectful.
            </BulletItem>
          </ul>
          <p className="mb-2 mt-5">
            If any rules are suspected of being broken, moderators are able to
            place an account on suspension, until an admin makes a final
            decision for disciplinary action.
          </p>
          <p className="mb-40 mt-2">
            If there is an appeal to a decision that you would like to make, the
            resources will be provided to you.
          </p>

          <p className="text-3xl text-center mt-10 mb-3" id="expansion">
            World Expansion
          </p>
          <p className="mt-5 mb-2">
            The world is the second most important part to this server, behind
            the players themselves.
          </p>
          <p className="my-2">This world will expand like so:</p>
          <ul className="mb-40">
            <BulletItem>First week: Border is 5,000x5,000 blocks.</BulletItem>
            <BulletItem>
              Second week: Border expands to 10,000x10,000 blocks.
            </BulletItem>
            <BulletItem>
              The border will expand by 5000 blocks every 3 months, unless the
              community grows large enough for another expansion.
            </BulletItem>
          </ul>

          <p className="text-3xl text-center mt-10 mb-2" id="travel">
            Player Travel
          </p>
          <p className="mt-4">
            Player travel on this server has a few differences to vanilla
            Minecraft.
          </p>

          <p className="text-2xl text-center mb-2 mt-10">
            Physical Travel Changes
          </p>
          <p className="mt-4 mb-2">
            The changes made to physical travel will be as such:
          </p>
          <ul>
            <BulletItem>Disabled Rocket Boosting with Elytra</BulletItem>
            <BulletItem>
              Implemented the Minecart Improvements, alongside increasing
              minecarts to the same speed as boats on ice.
            </BulletItem>
            <BulletItem>
              Nether and Overworld Highways will be encouraged, and are treated
              as critical player-built infrastructure.
            </BulletItem>
          </ul>

          <p className="text-2xl text-center mb-2 mt-10">Teleporting</p>
          <p className="mt-4 mb-2">
            Teleporting will have a different concept to most other Minecraft
            server, and should not be taken for granted.
          </p>

          <p className="my-2">
            As such, this is what to expect from our home-brew teleporting
            system:
          </p>
          <ul>
            <BulletItem>/spawn</BulletItem>
            <BulletItem>/home (alongside /sethome)</BulletItem>
            <BulletItem>/tpa (alongside its variants)</BulletItem>
          </ul>

          <p className="my-2">
            We have implemented a system where the use of each of these commands
            will cost <span className="font-bold">1 diamond</span>, straight
            from your inventory, alongside a 15 minute cooldown.
          </p>
          <p className="my-2">
            This is to encourage the on-foot exploration of the world, and
            everybody's wonderful creations on the way to your destination.
          </p>
          <p className="text-2xl text-center mb-2 mt-10">
            Cardinal Warp System (CWS)
          </p>
          <p className="mt-4 mb-2">
            At Month 6, the border will increase to 20,000x20,000.
          </p>
          <p className="my-2">
            This will unlock a system visible from day one called the Cardinal
            Warp System, or CWS.
          </p>
          <p className="my-2">
            The CWS is a completely free way to travel long distances in the
            four cardinal directions from spawn (North, East, South, West).
          </p>
          <p className="my-2">
            Each direction will have four fixed warp plates, which will not
            expand any further than initially set (10,000 blocks from spawn, in
            the four directions)
          </p>
          <p className="mt-2 mb-40">
            The purpose of these is to encourage people to develop further out
            regions in the world, while also providing easier access for players
            wanting to travel.
          </p>

          <p className="text-3xl text-center mb-2 mt-10" id="towns">
            Towns & Town Spotlight
          </p>
          <p className="mt-4 mb-2">
            With a server designed around close community interaction, we
            completely endorse and encourage the creation of towns and
            individual communities.
          </p>
          <p className="my-2">
            If you think you may have a potentially successful town, or would
            love to just be put on the map, you are able to register your town
            publicly.
          </p>
          <p className="my-2">
            Once you have registered your town, and it has been accepted, you
            will notice that your town is now visible on the web-map of the
            server.
          </p>
          <p className="my-2">
            Alongside, your town is now registered into our monthly event called
            the "Town Spotlight", were everybody votes for a town to be featured
            for that month.
          </p>
          <p className="my-2">
            For the users, the town spotlight is accessible by the command
            /townspotlight. The first usage is free, after that it will cost 3
            diamonds to use it again.
          </p>
          <p className="my-2">
            For the town owner, every teleport to the town spotlight equates to
            3 diamonds, and by the end of that month, all diamonds get deposited
            directly into the town owners inventory.
          </p>
          <p className="mt-5 mb-2">This is all to encourage a few things:</p>
          <ul className="mt-2 mb-40">
            <BulletItem>Individual town and community growth</BulletItem>
            <BulletItem>
              Economic gain for the town in the spotlight, as well as the
              surrounding area
            </BulletItem>
            <BulletItem>Beautiful builds worth exploring and seeing</BulletItem>
            <BulletItem>Larger community interaction</BulletItem>
          </ul>
          <p className="text-3xl text-center mb-2 mt-10" id="gameplay-changes">
            Gameplay Changes
          </p>

          <p className="mt-4 mb-2">
            The gameplay has also been adjusted in ways to preserve the server.
          </p>
          <p className="my-2">Some changes are:</p>
          <ul>
            <BulletItem>Villager trade limitations</BulletItem>
            <BulletItem>Elytra boost being disabled</BulletItem>
            <BulletItem>Minecart changes</BulletItem>
          </ul>
          <p className="mt-2 mb-40">
            Any future changes will be clearly documented here, alongside a
            public announcement.
          </p>
          <p className="text-3xl text-center mb-2 mt-10" id="staff">
            Server Staff
          </p>
          <p className="mt-4 mb-2">
            The server staff are here to assist and manage the community and
            server.
          </p>
          <p className="my-2">Please treat them with respect.</p>
          <p className="my-2 font-bold">Moderator</p>
          <ul className="my-2">
            <BulletItem>Handles reports</BulletItem>
            <BulletItem>Issues temporary suspensions</BulletItem>
            <BulletItem>Sends any issues or cases to review</BulletItem>
            <BulletItem>General community guides</BulletItem>
          </ul>
          <p className="mt-4 mb-2 font-bold">Admin</p>
          <ul className="my-2">
            <BulletItem>Makes final disciplinary action</BulletItem>
            <BulletItem>Oversees staff and community</BulletItem>
            <BulletItem>Maintains server stability</BulletItem>
          </ul>
          <p className="mt-4 mb-2 font-bold">Host</p>
          <p className="my-2">
            This will be Pixel, there is a lot to this job, that will not be
            mentioned here, but he is happy to answer any questions!
          </p>
          <p className="mt-2 mb-40">
            All staff will act in accordance to training and their own beliefs
            in handling a situation. If there are any issues with how staff has
            treated you, please report this immediately.
          </p>
          <p className="text-3xl text-center mb-2 mt-10" id="transparency">
            Transparency
          </p>
          <p className="mt-4 mb-2">
            This server values transparency and openness with it's community.
          </p>
          <p className="my-2">
            We will share as much publicly available information as possible,
            such as:
          </p>
          <ul className="my-2">
            <BulletItem>Policy changes</BulletItem>
            <BulletItem>Project timelines</BulletItem>
            <BulletItem>Information archives</BulletItem>
            <BulletItem>Disciplinary records (within reason)</BulletItem>
          </ul>
          <p className="mt-2 mb-40">
            I believe in trust built through transparency, so if there is any
            questions or queries, feel free to ask them in the discord!
          </p>
          <p className="text-3xl text-center mb-2 mt-10" id="final">
            Final Notes
          </p>
          <p className="mt-4 mb-2">
            This server is intentionally designed to run slowly.
          </p>
          <p className="my-2">
            Please do not treat the server as a ground for speedrunning, or
            being hyper-competitive.
          </p>
          <p className="mt-2 mb-40">
            The server is designed to run slowly, with a large focus on being
            social. If this resonates with you, you're exactly who this server
            is designed for!
          </p>
          <p className="text-3xl text-center mb-2 mt-10" id="credits">
            Credits
          </p>
          <p className="mt-4 mb-2">Host & Head Developer: pixel1523</p>
          <p className="my-2">Website Developer: mrdewmon66</p>
          <p className="my-2">Jackson from Airsoft: h1ghjaxed</p>
          <p className="mt-5 mb-2">Current Moderators:</p>
          <p className="my-2">N/A</p>
          <p className="mt-5 mb-2">Current Admins:</p>
          <p className="my-2">N/A</p>
        </div>
        <div className="w-1/4 shrink-0">
          <SideNav />
        </div>
      </div>
    </>
  );
}
