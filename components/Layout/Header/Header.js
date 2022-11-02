import {
  CheckBadgeIcon,
  CubeIcon, HomeIcon, LightBulbIcon,
  MagnifyingGlassIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import React from "react";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
function Header() {
  return (
    <header className="flex flex-col items-center sm:flex-row m-5 justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CubeIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Logo/>
    </header>
  );
}

export default Header;
