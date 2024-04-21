import { useSelectedUser, useUser } from "@/store/useStore";
import { PhoneIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React from "react";
import { io } from "socket.io-client";

export default function CallBtn() {
  const router = useRouter();
  const socket = io(process.env.NEXT_PUBLIC_API_URL);
  const selectedUser = useSelectedUser((state) => state.selectedUser);
  const myUser = useUser((state) => state.myUser);

  function handleClick() {
    socket.emit(
      "private message",
      selectedUser.username,
      "📞 " + myUser.username + " is calling..(Click on the call button to recieve call)",
      myUser.username
    );
    router.push("/chat/room");
  }

  return (
    <button onClick={handleClick}>
      <PhoneIcon />
    </button>
  );
}
