import { userProps } from "@/types";
import { FlashIcon } from "@/utils/icons";
import React from "react";
import Image from "next/image";
import CallBtn from "./CallBtn";

export default function TopBar({ selectedUser }: { selectedUser: userProps }) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    document.querySelector(".messages")?.classList.add("hidden");
    document.querySelector(".sidebar")?.classList.remove("hidden");
    document.querySelector(".selected-user")?.classList.remove("selected-user");
  }
  return (
    <div data-theme="dark" className={`${selectedUser ? " " : "md:hidden"}`}>
      <div className="w-full px-10 py-4 flex justify-between items-center">
        <div className="flex gap-5">
          <button onClick={handleClick} className="md:hidden">
            <FlashIcon />
          </button>
          <div className="avatar ml-5 cursor-auto">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {selectedUser?.avatarId && <Image src={`https://robohash.org/${selectedUser.avatarId}` || ""} width={256} height={256} alt="avatar" />}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {selectedUser?.username && <h3 className="font-semibold text-slate-300 text-xl">{selectedUser.username}</h3>}
            <p className="text-slate-400">Online</p>
          </div>
        </div>
        <CallBtn />
      </div>
    </div>
  );
}
