import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      className="object-contain"
      src="https://links.papareact.com/ua6"
      width={200}
      height={100}
      alt="Header Icon"
    />
  );
}

export default Logo;
