"use client";

import Chatlist from "./Chatlist";
import Searchbar from "./Searchbar";

export default function Sidebar({ myUser }: { myUser: any }) {
  return (
    <div
      className="w-full md:!block sidebar z-10 border-r-2 border-slate-600  md:w-1/2 lg:w-1/3 p-3  h-screen overflow-y-auto max-sm:fixed"
      style={{ scrollbarWidth: "none" }}
    >
      <Searchbar myUser={myUser} />
      <Chatlist myUser={myUser} />
    </div>
  );
}
