import Link from "next/link";

import BaseLayout from "@/layouts/BaseLayout";

import Introduction from "./Introduction";
import ProfileCard from "./ProfileCard";

function Profile() {
    return (
        <BaseLayout>
            <main className="flex justify-center">
                {/* 全体の定義ここから */}
                <div className="flex w-11/12">
                    <div className="flex flex-col justify-center">
                        {/* 上側の要素ここから */}
                        <div className="flex items-center sm:flex-col l-md:flex-row">
                            {/* 左側の要素ここから */}
                            <ProfileCard />
                            {/* 左側の要素ここまで */}
                            {/* 右側の要素ここから */}
                            <Introduction />
                            {/* 右側の要素ここまで */}
                        </div>
                        {/* 上側の要素ここまで */}
                        {/* 下側の要素ここから */}
                        <div className="flex flex-row items-center justify-center">
                            {/* 左側の要素ここから */}
                            <div className="flex items-center justify-center"></div>
                            {/* 左側の要素ここまで */}
                            {/* 右側の要素ここから */}
                            <div className="flex items-center justify-center">
                                <ul>
                                    <li className="m-2 rounded border-y-4 border-zinc-100 text-center text-2xl">
                                        <Link
                                            className="block size-full px-5 hover:bg-purple-600 hover:opacity-95"
                                            href="/profile/gyagu"
                                        >
                                            ギャグ
                                        </Link>
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
    );
}

export default Profile;
