"use client";

import { useEffect } from "react";
import { fetchMessages } from "../../../lib/fetchers";
import { useMessages, useSelectedUser, useUser } from "@/store/useStore";
import { shallow } from "zustand/shallow";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MessageItem from "./MessageItem";

export default function MesssageList() {
  const sender = useUser((state: any) => state.myUser);
  const reciever = useSelectedUser((state: any) => state.selectedUser);
  const { messages, setMessages } = useMessages(
    (state: any) => ({
      messages: state.messages,
      setMessages: state.setMessages,
    }),
    shallow
  );

  const [parent] = useAutoAnimate();

  useEffect(() => {
    fetchMessages(sender, reciever, setMessages);
  }, [reciever]);

  return (
    <div ref={parent} className="w-full mb-10 flex flex-col max-h-[75vh] overflow-auto no-scrollbar">
      {messages
        ? messages.map((item: any, i: number) => <MessageItem key={i} user={sender.username == item.sender ? true : false} message={item.message} />)
        : ""}
    </div>
  );
}
