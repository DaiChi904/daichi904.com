import Image from "next/image";
import Link from "next/link";
import Clock from "./components/clock";
import Header from "./components/header";
import Footer from "./components/footer";

function Home () {
    return(
        <>
          <div className="flex">
            <Header />
          </div>
          <h1 className="text-8xl flex items-center justify-center h-56">DaiChi</h1>
          <div className="text-4xl flex items-center justify-center h-16">
            <Clock />
          </div>
            {/* ナビゲーションここから */}
              <div className="flex w-auto h-56 items-center justify-center">
                  <ul className="flex justify-center">
                    <li className="text-xl px-10 border-y-2 border-sky-950 mx-2 rounded">
                      <Link href="/profile">プロフィール</Link>
                    </li>
                    <li className="text-xl px-10 border-y-2 border-sky-950 mx-2 rounded">
                      <Link href="./portfolio">ポートフォリオ</Link>
                    </li>
                    <li className="text-xl px-10 border-y-2 border-sky-950 mx-2 rounded">Blog</li>
                    <li className="text-xl px-10 border-y-2 border-sky-950 mx-2 rounded">SNS</li>
                  </ul>
              </div>
            {/* ナビゲーションここまで */}
          <Footer />
        </>
    );
};

export default Home;