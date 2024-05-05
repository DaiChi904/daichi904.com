import Link from "next/link";
import Clock from "../components/clock";
import BaseLayout from "@/layouts/BaseLayout";

function Home () {
  return (
      <>
        <BaseLayout>
          <main className="flex flex-col grow items-center justify-center">
            <h1 className="text-8xl flex items-center justify-center h-48">DaiChi</h1>
            <div className="text-4xl flex items-center justify-center h-16">
              <Clock mode={"nomal"} />
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
        </BaseLayout>
      </>
  );
};

export default Home;