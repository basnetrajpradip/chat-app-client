"use client";

import { SearchIcon } from "@/utils/icons";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Searchbar({ myUser }: { myUser: any }) {
  return (
    <div className="flex gap-4 ">
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
      <button onClick={() => signOut()} className="btn  btn-md border-slate-500 hover:border-slate-400  rounded-full">
        <div className="hidden md:block"> Logout</div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#a6adbb">
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
        </svg>
      </button>
    </div>
  );
}
