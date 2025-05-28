import { Button } from "../ui/button";
import Darkmode from "./Darkmode";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex flex-col justify-between p-8 gap-4 sm:flex-row ">
        <Logo />
        <Search />
        <div className="flex gap-4 items-center">
          <Darkmode />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
