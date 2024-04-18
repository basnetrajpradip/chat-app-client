"use client";
import { AvatarProps } from "@/types";
import Image from "next/image";

export default function Avatar({ avatarId, setAvatarId }: AvatarProps) {
  return (
    <div className="avatar flex flex-col items-center gap-4 justify-center tooltip" data-tip="Click to regenerate avatar.">
      <div
        className="w-24 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        onClick={() => setAvatarId((Math.random() * 20).toFixed())}
      >
        <Image src={`https://robohash.org/${avatarId}.png`} alt="avatar" width="256" height="256" decoding="async" data-nimg="1" priority={true} />
      </div>
      <span className="label-text-alt">Click to regenerate avatar</span>
    </div>
  );
}
