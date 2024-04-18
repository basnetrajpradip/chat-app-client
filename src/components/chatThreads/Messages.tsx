"use client";

import { useSelectedUser } from "@/store/useStore";
import TopBar from "./TopBar";
import MesssageList from "./MesssageList";

export default function Messages() {
  const selectedUser = useSelectedUser((state) => state.selectedUser);

  /*  if (!selectedUser) {
    return (
      <div className="bg-image messages w-full min-h-screen z-0  md:w-1/2 lg:w-2/3 md:flex md:flex-col flex-col">
        <div className="w-full">Start chatting now</div>
      </div>
    );
  } */

  return (
    <div className="bg-image messages w-full min-h-screen z-0 hidden md:w-1/2 lg:w-2/3 md:flex md:flex-col flex-col">
      <TopBar selectedUser={selectedUser} />
      <div className={`max-w-sm md:max-w-3xl w-full mx-auto mt-auto mb-10 ${selectedUser ? "" : "md:hidden"}`}>
        <MesssageList />
      </div>
    </div>
  );
}
