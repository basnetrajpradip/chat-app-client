"use client";
import React, { useEffect } from "react";
import { fetchUsers } from "../../../lib/fetchers";
import { shallow } from "zustand/shallow";
import { useAllUsers } from "@/store/useStore";
import ChatItem from "./ChatItem";
import { io } from "socket.io-client";

export default function Chatlist({ myUser }: { myUser: any }) {
  const { users, setUsers } = useAllUsers((state: any) => ({ users: state.users, setUsers: state.setUsers }), shallow);
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL);

    socket.on("new-user", () => {
      fetchUsers(myUser.id, setUsers);
    });
  }, []);

  useEffect(() => {
    fetchUsers(myUser.id, setUsers);
  }, [myUser, setUsers]);

  return (
    <ul className="my-5 flex flex-col">
      {/* ChatItem */}
      {users ? (
        users?.reverse()?.map((user: any) => <ChatItem key={user._id} user={user} />)
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex justify-center ml-2">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      )}
    </ul>
  );
}
