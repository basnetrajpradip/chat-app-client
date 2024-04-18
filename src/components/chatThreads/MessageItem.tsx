import React from "react";

export default function MessageItem(user: boolean | any, message: string | undefined) {
  return (
    <div className={`chat ${user ? "chat-end" : "chat-start"}`}>
      <div className={`chat-bubble ${user ? "chat-bubble" : "chat-bubble-primary"}`}>{message}</div>
    </div>
  );
}
