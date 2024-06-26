import Link from "next/link";

import BaseLayout from "@/layouts/BaseLayout";

import Clock from "../components/clock";

function Home() {
    return (
        <>
            <BaseLayout>
                <main className="flex grow flex-col items-center justify-center">
                    <h1 className="flex h-48 items-center justify-center text-6xl l-sm:text-8xl">DaiChi</h1>
                    <div className="flex h-16 items-center justify-center text-3xl l-sm:text-4xl">
                        <Clock mode={"nomal"} />
                    </div>
                    {/* ナビゲーションここから */}
                    <div className="flex h-32 items-center justify-center">
                        <ul>
                            <li className="mx-2 rounded border-y-4 border-zinc-100 text-center text-xl l-sm:text-2xl">
                                <Link className="block size-full px-5 hover:bg-purple-600 hover:opacity-95" href="/profile">
                                    About Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* ナビゲーションここまで */}
                </main>
            </BaseLayout>
        </>
    );
}

export default Home;
