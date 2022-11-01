import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  CubeIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
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
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt = "Header Icon"
      />
    </header>
  );
}

export default Header;
