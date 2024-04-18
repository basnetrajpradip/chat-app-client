"use client";
import { useSession } from "next-auth/react";
import Chatlist from "./Chatlist";
import Searchbar from "./Searchbar";
import { useUser } from "@/store/useStore";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

export default function Sidebar({ myUser }: { myUser: any }) {
  return (
    <div className="w-full md:!block sidebar z-10 border-r-2 border-slate-600  md:w-1/2 lg:w-1/3 p-3  h-screen">
      <Searchbar myUser={myUser} />
      <Chatlist myUser={myUser} />
    </div>
  );
}
