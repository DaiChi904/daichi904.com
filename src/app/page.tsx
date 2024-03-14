"use client"

import { useState, useRef } from "react"
import Image from "next/image";
import Link from "next/link";
import Clock from "../components/clock";
import Header from "../components/header";
import Footer from "../components/footer";

function Home () {
  const [changeAppStatus, setChangeAppStatus] = useState(false)
  setTimeout(() => {
    setChangeAppStatus(true);
  }, 500);
  return(
      <>
        <div className="flex flex-col w-screen h-screen items-center justify-between">
          <div className="flex w-full">
            <Header />
          </div>
          <div className={changeAppStatus ? "flex flex-col h-full transition-opacity duration-700 opacity-100 ease-in-out " : "transition-opacity duration-700 opacity-0 ease-in-out"}>
          <main>
            <h1 className="text-8xl flex items-center justify-center h-48 mt-24">DaiChi</h1>
            <div className="text-4xl flex items-center justify-center h-16">
              <Clock />
            </div>
            {/* ナビゲーションここから */}
            <div className="flex h-32 justify-center items-center">
              <ul>
                <li className="text-2xl border-zinc-100 border-y-4 mx-2 rounded text-center">
                  <Link className="block w-full h-full px-5 hover:bg-purple-600 hover:opacity-95" href="/profile">About Me</Link>
                </li>
              </ul>
            </div>
            {/* ナビゲーションここまで */}
          </main>
          </div>
          <div className="flex grow justify-center items-end mb-3">
            <Footer />
          </div>
        </div>  
      </>
  );
};

export default Home;