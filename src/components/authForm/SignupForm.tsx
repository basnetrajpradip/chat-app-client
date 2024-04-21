"use client";
import React, { useState } from "react";
import Avatar from "@/components/Avatar";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

export default function SignupForm() {
  const [avatarId, setAavtarId] = useState((Math.random() * 20).toFixed());
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const socket = io("http://localhost:4000");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !username || !password || !confirmPass) {
      setError("All fields are necessary.");
      return;
    } else if (password !== confirmPass) {
      setError("Passwords must match.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPass,
          avatarId,
        }),
      });
      if (res.ok) {
        setError("");
        setUsername("");
        setPassword("");
        setConfirmPass("");
        setEmail("");
        socket.emit("joined", "new user");
        router.push("/login");
      } else {
        setError("User registration failed.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="bg-image min-h-screen w-full flex  flex-col gap-4 justify-center items-center">
        <div className="card w-[90%] md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 bg-base-100 rounded-lg ">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col  gap-5">
                <div className="text-3xl font-bold flex flex-col justify-center items-center gap-1 mb-4">
                  Sign Up
                  <div className="text-base font-light">Register an account to start chatting.</div>
                </div>
                <Avatar avatarId={avatarId} setAvatarId={setAavtarId} />
                <div className="flex flex-col  gap-5">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input type="password" className="grow" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="Confirm Password"
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <div className="text-base mt-2 mx-auto flex justify-center">
                <a href="/login" className="link link-hover">
                  Already have an account? Log in
                </a>
              </div>
            </form>
          </div>
        </div>
        {error && (
          <div role="alert" className="alert alert-error flex w-[90%] md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </>
  );
}
