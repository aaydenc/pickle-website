import Navbar from "../../shared/Nav";
import SideNav from "./components/SideNav";

export default function Handbook() {
  return (
    <>
      <Navbar />
      <SideNav />

      <div>
        <p id="some-content">Big Banana</p>
      </div>
    </>
  );
}
