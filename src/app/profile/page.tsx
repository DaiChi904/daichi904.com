"use client"
import { useState } from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import MyIcon from "../components/myIcon";

function Profile() {
    const [changeAppStatus, setChangeAppStatus] = useState(false)
    setTimeout(() => {
    setChangeAppStatus(true);
    }, 500); /* 2秒後にchangeAppStatusをtrueに変更 */

    return (
        <>
            {/* 全体の定義 */}
            <div className="flex flex-col h-screen">
                <div className="flex items-start">
                    <Header />
                </div>
                {/* メイン画面の定義 */}
                <div className={changeAppStatus ? "flex flex-col h-full transition-opacity duration-700 opacity-100 ease-in-out" : "transition-opacity duration-700 opacity-0 ease-in-out"}>
                <main className="flex justify-center">
                <div className="flex flex-col w-11/12">
                {/* メイン画面の定義 */}
                    <div className="flex flex-row">
                        {/* 左側の要素 */}
                        <div className="flex flex-col my-3 border-2 rounded-lg">
                            <MyIcon />
                            <table className="table-auto my-2">
                                <thead>
                                    <tr>
                                        <th>名前</th>
                                        <td>DaiChi</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>出身地</th>
                                        <td>広島</td>
                                    </tr>
                                    <tr>
                                        <th>生年月日</th>
                                        <td>平成16年9月4日</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* 左側の要素終わり */}
                        {/* 右側の要素 */}
                        <div className="flex flex-col m-3">
                            <h1 className="text-3xl">ひとこと</h1>
                            <p className="text-lg">広島出身で、地方の国立大学に通うしがない大学生です。情報系の勉強をしています。</p>
                            <p className="text-lg">最近はプログラミングの勉強を始めて、今はReactとかNext.jsとかをこねこねしています。</p>
                            <p className="text-lg">趣味はゲームや音楽を聴くことで、最近は料理にはまっています。下に自分の好きな音楽をいくつか載せておきます。</p>

                            <ol className="m-5">
                                <li>ユノギシロ - ただ、透明</li>
                                <li>miwa - ヒカリへ</li>
                                <li>こはならむ - 10年後の私になら</li>
                            </ol>
                        </div>
                        {/* 右側の要素終わり */}
                    </div>
                {/* メイン画面の定義終わり */}
                </div>
                </main>
                {/* メイン画面の定義終わり */}
                <div className="flex items-end justify-center grow mb-3">
                    <Footer />
                </div>
                </div>
            </div>
            {/* 全体の定義終わり */}
        </>
    );
};

export default Profile;
