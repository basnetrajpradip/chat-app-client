"use client";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../../lib/fetchers";
import { useSession } from "next-auth/react";
import { shallow } from "zustand/shallow";
import { useUser } from "@/store/useStore";
import Messages from "@/components/chatThreads/Messages";

export default function Chat() {
  const { myUser, setUser } = useUser((state) => ({ myUser: state.myUser, setUser: state.setUser }), shallow);
  const session = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(session.data?.user);
  }, [session.data?.user, setUser]);

  useEffect(() => {
    if (myUser !== undefined) {
      setLoading(false);
    }
  }, [myUser]);

  if (loading) {
    // Render loading state
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex">
        <Sidebar myUser={myUser} />
        <Messages />
      </div>
    </div>
  );
}
