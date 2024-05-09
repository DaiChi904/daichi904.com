import Link from "next/link";

import MyIcon from "../../components/myIcon";
import BaseLayout from "@/layouts/BaseLayout";

function Profile() {
    return (
        <>
            <BaseLayout>
                <main className="flex justify-center">
                    {/* 全体の定義ここから */}
                    <div className="flex w-11/12">
                        <div className="flex flex-col justify-center">
                            {/* 上側の要素ここから */}
                            <div className="flex sm:flex-col l-md:flex-row items-center">
                                {/* 左側の要素ここから */}    
                                <div className="flex flex-col my-3 border-2 rounded-lg max-w-68 items-center w-fit h-fit">
                                    <div className="min-w-60">
                                        <MyIcon />
                                    </div>
                                    <table className="table-auto my-2">
                                        <thead>
                                            <tr>
                                                <th>名前</th>
                                                <td>DaiChi ( DaiChi904 )</td>
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
                                {/* 左側の要素ここまで */}
                                {/* 右側の要素ここから */}
                                <div className="flex flex-col m-3">
                                    <h1 className="text-3xl">ひとこと</h1>
                                    <p className="text-lg">広島出身で、地方の国立大学に通うしがない大学生です。情報系の勉強をしています。</p>
                                    <p className="text-lg">最近はプログラミングの勉強を始めて、今はReactとかNext.jsとかをこねこねしています。</p>
                                    <p className="text-lg">趣味はゲームや音楽を聴くことで、最近は料理にはまっています。下に自分の好きな音楽をいくつか載せておきます。特に、「ただ、透明」は個人的に一番好きな歌です。是非聴いてみてください。</p>

                                    <ol className="m-5">
                                        <li>ユノギシロ - ただ、透明</li>
                                        <li>miwa - ヒカリへ</li>
                                        <li>こはならむ - 10年後の私になら</li>
                                    </ol>
                                </div>
                                {/* 右側の要素ここまで */}
                            </div>
                            {/* 上側の要素ここまで */}
                            {/* 下側の要素ここから */}
                            <div className="flex flex-row justify-center items-center">
                                {/* 左側の要素ここから */}
                                <div className="flex justify-center items-center">

                                </div>
                                {/* 左側の要素ここまで */}
                                {/* 右側の要素ここから */}
                                <div className="flex justify-center items-center">
                                    <ul>
                                        <li className="text-2xl border-zinc-100 border-y-4 mx-2 rounded text-center m-2">
                                            <Link className="block w-full h-full px-5 hover:bg-purple-600 hover:opacity-95" href="/profile/gyagu">ギャグ</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* 右側の要素ここまで */}
                            </div>
                            {/* 下側の要素ここまで */}
                        </div>
                    </div>
                    {/* 全体の定義ここまで */}
                </main>
            </BaseLayout>
        </>
    );
};

export default Profile;
