"use client";
import React, { useEffect } from "react";
import { fetchUsers } from "../../../lib/fetchers";
import { shallow } from "zustand/shallow";
import { useAllUsers } from "@/store/useStore";
import ChatItem from "./ChatItem";

export default function Chatlist({ myUser }: { myUser: any }) {
  const { users, setUsers } = useAllUsers((state: any) => ({ users: state.users, setUsers: state.setUsers }), shallow);

  useEffect(() => {
    fetchUsers(myUser.id, setUsers);
  }, [myUser, setUsers]);

  return (
    <ul className="my-5 flex flex-col">
      {/* ChatItem */}
      {users ? users?.reverse()?.map((user: any) => <ChatItem key={user._id} user={user} />) : <span className="loading loading-ring w-16"></span>}
    </ul>
  );
}
