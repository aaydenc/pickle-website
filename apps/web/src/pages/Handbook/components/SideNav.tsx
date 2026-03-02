import { HashLink } from "react-router-hash-link";

export default function SideNav() {
  return (
    <>
      <HashLink smooth to="/handbook/#some-content">
        Link to some content
      </HashLink>
    </>
  );
}
