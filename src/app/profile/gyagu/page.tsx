"use client"
import { useState } from "react";

import Footer from "../../../components/footer";
import Header from "../../../components/header";

function Portfolio() {
    const [changeAppStatus, setChangeAppStatus] = useState(false)
    setTimeout(() => {
    setChangeAppStatus(true);
    }, 500); /* 2秒後にchangeAppStatusをtrueに変更 */

    return(
        <>
            <div className="flex flex-col w-screen h-screen items-center">
                <div className="flex w-full items-start">
                    <Header />
                </div>
                <div className={changeAppStatus ? "flex flex-col h-full transition-opacity duration-700 opacity-100 ease-in-out" : "transition-opacity duration-700 opacity-0 ease-in-out"}>
                    <main className="flex flex-col grow">
                        <div className="flex justify-center">
                            <h1 className="text-4xl my-2">ギャグ一覧</h1>
                        </div>
                            <ol className="text-2xl my-2">
                                <li>水こぼした。おわーたー。</li>
                                <li>コメントには気持ちをコメント。</li>
                                <li>子供めっちゃいるど。</li>
                                <li>物を落とした音とした。</li>
                                <li>その友達のことにはフレンドこう。</li>
                                <li>アルミ缶の上にあるミカン。</li>
                                <li>日本の海にじゃっぱーん。</li>
                                <li>大義を果たすのがたいぎい。</li>
                                <li>この会場はでかいじょう。</li>
                                <li>泣くくらい(cry)悲しい。</li>
                                <li>共産主義への協賛主義。</li>
                                <li>クレヨンくれよん。</li>
                                <li>調味料で超魅了。</li>
                                <li>慣行の観光を敢行する。</li>
                                <li>この映像とてもえいぞう。</li>
                                <li>思い出は重いで...</li>
                                <li>台湾にいきたいわん！</li>
                                <li>エイリアンの歯めっちゃ鋭利やん。</li>
                                <li>石が落ちた。ストーン！</li>
                                <li>内科医にならにかい？</li>
                            </ol>
                    </main>
                </div>
                <div className="flex grow justify-center items-end h-fit mb-3">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Portfolio;