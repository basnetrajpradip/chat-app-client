"use client";

import { SearchIcon } from "@/utils/icons";
import React from "react";
import Image from "next/image";
import { useUser } from "@/store/useStore";
import { shallow } from "zustand/shallow";

export default function Searchbar({ myUser }: { myUser: any }) {
  return (
    <div className="flex gap-4">
      <div className="avatar online">
        <div className="w-12 rounded-full ring">
          <Image src={myUser.avatarId} width={256} height={256} alt="avatar" priority={true} />
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="input pl-12 rounded-full input-bordered text-gray-300 w-full bg-gray-800 placeholder:text-gray-400"
        />
        <div className="w-6 h-6 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
