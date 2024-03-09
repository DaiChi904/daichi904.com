import Image from "next/image";
import Link from "next/link";
import Clock from "./components/clock";
import Header from "./components/header";
import Footer from "./components/footer";

function Home () {
    return(
        <>
          <div className="flex flex-col h-screen items-center justify-between">
            <div className="flex">
              <Header />
            </div>
            <main>
              <h1 className="text-8xl flex items-center justify-center h-48">DaiChi</h1>
              <div className="text-4xl flex items-center justify-center h-16">
                <Clock />
              </div>
              {/* ナビゲーションここから */}
              <div className="flex w-auto h-48 items-center justify-center">
                <ul className="flex justify-center">
                  <li className="text-xl px-10 border-y-4 border-zinc-100 mx-2 rounded">
                    <Link href="/profile">About Me</Link>
                  </li>
                </ul>
              </div>
              {/* ナビゲーションここまで */}
            </main>
            <div className="mb-3">
              <Footer />
            </div>
          </div>  
        </>
    );
};

export default Home;