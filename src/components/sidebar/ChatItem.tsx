"use client";
import { useSelectedUser } from "@/store/useStore";
import { userProps } from "@/types";
import Image from "next/image";

export default function ChatItem({ user }: { user: userProps }) {
  const setSelectedUser = useSelectedUser((state) => state.setSelectedUser);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    document.querySelector(".messages")?.classList.remove("hidden");
    document.querySelector(".messages")?.classList.add("flex");
    document.querySelector(".sidebar")?.classList.add("hidden");
    document.querySelector(".selected-user")?.classList.remove("selected-user");
    e.currentTarget.classList.add("selected-user");
    setSelectedUser(user);
  }
  return (
    <>
      <li onClick={handleClick} className="flex gap-5 cursor-pointer hover:bg-gray-700 p-5 rounded-lg">
        <div className="avatar">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image src={`https://robohash.org/${user.avatarId}`} alt="avatar" width={256} height={256} />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold text-slate-300 text-lg">{user.username}</h3>
          <p className="text-slate-400">User has joined</p>
        </div>
      </li>
      <div className="divider my-0"></div>
    </>
  );
}
