import { IoFishOutline, IoLogoIonic, IoLogoJavascript } from "react-icons/io5";

import BaseLayout from "@/layouts/BaseLayout";
import PORItemContainer from "@/portfolioItem/PORItemContainer";
import PORItemLogo from "@/portfolioItem/PORItemLogo";
import PORItemTitle from "@/portfolioItem/PORItemTitle";
import PORLowerItem from "@/portfolioItem/PORLowerItem";
import PORUpperItem from "@/portfolioItem/PORUpperItem";
import { FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiMui } from "react-icons/si";
import PORItems from "@/portfolioItem/PORItems";
import Link from "next/link";


function Portfolio() {
    return(
        <>
            <BaseLayout>
                <main className="flex flex-col justify-center items-center h-fit w-screen">
                    {/* 言語ここから */}
                    <PORItems>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                    <IoLogoJavascript size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    JavaScript
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>My Project</p>
                                <ul>
                                    <li className="hover:text-purple-600"><Link href="https://github.com/GunmaRamens/js_practice/tree/main">・js_practice</Link></li>
                                </ul>
                            </PORLowerItem>
                        </PORItemContainer>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                    <SiTypescript size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    TypeScript
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>My Projects</p>
                                <ul>
                                    <li className="hover:text-purple-600"><Link href="https://github.com/DaiChi904/calculator-app">・calculator-app</Link></li>
                                    <li className="hover:text-purple-600"><Link href="https://github.com/DaiChi904/smart-task-manager">・smart-task-manager( コードが汚すぎるのでいつか作り直す )</Link></li>
                                    <li>・このサイト</li>
                                </ul>
                            </PORLowerItem>
                        </PORItemContainer>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                    <FaPython size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    Python
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                ちょっとだけ。
                                <p>My Projects</p>
                                <ul>
                                    <li>特にない。大学の課題をするために少し活用したくらい。</li>
                                </ul>
                            </PORLowerItem>
                        </PORItemContainer>
                    </PORItems>
                    {/* 言語ここまで */}
                    {/* ライブラリここから */}
                    <PORItems>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                    <FaReact size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    React
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>インターンでも使ってます。</p>
                                <p>My Projects</p>
                                <ul>
                                    <li className="hover:text-purple-600"><Link href="https://github.com/DaiChi904/calculator-app">・calculator-app</Link></li>
                                    <li className="hover:text-purple-600"><Link href="https://github.com/DaiChi904/smart-task-manager">・smart-task-manager( コードが汚すぎるのでいつか作り直す )</Link></li>
                                    <li>・このサイト</li>
                                </ul>
                            </PORLowerItem>
                        </PORItemContainer>
                    </PORItems>
                    {/* ライブラリここまで */}
                    {/* フレームワークここから */}
                    <PORItems>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                <SiNextdotjs size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    Next.js
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>インターンでも使ってます。</p>
                                <p>My Project</p>
                                <ul>
                                    <li>・このサイト</li>
                                </ul>
                            </PORLowerItem>
                        </PORItemContainer>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                    <IoLogoIonic size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    Ionic Framework
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>My Project</p>
                                <ul>
                                    <li className="hover:text-purple-600"><Link href="https://github.com/DaiChi904/calculator-app">・calculator-app</Link></li>
                                    <li className="hover:text-purple-600"><Link href="https://github.com/DaiChi904/smart-task-manager">・smart-task-manager( コードが汚すぎるのでいつか作り直す )</Link></li>
                                </ul>
                            </PORLowerItem>
                        </PORItemContainer>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                <RiTailwindCssFill size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    TailWind CSS
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>My Project</p>
                                <ul>
                                    <li>・このサイト</li>
                                </ul>
                            </PORLowerItem>
                        </PORItemContainer>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                    <SiMui size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    Material UI
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>インターンで少し。</p>
                            </PORLowerItem>
                        </PORItemContainer>
                    </PORItems>
                    {/* フレームワークここまで */}
                    {/* その他ここから */}
                    <PORItems>
                        <PORItemContainer>
                            <PORUpperItem>
                                <PORItemLogo>
                                    <IoFishOutline size={60} />
                                </PORItemLogo>
                                <PORItemTitle>
                                    Filleting Fishes 
                                </PORItemTitle>
                            </PORUpperItem>
                            <PORLowerItem>
                                <p>魚捌けます！！！</p>
                            </PORLowerItem>
                        </PORItemContainer>
                    </PORItems>
                    {/* その他ここまで */}
                </main>
            </BaseLayout>
        </>
    );
}

export default Portfolio;