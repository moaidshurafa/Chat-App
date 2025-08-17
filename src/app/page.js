"use client";
import Image from "next/image";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <main className="bg-sky-100">
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </main>
  );
}
