import Link from "next/link";
import { FaPython, FaReact } from "react-icons/fa";
import { IoFishOutline, IoLogoIonic, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiNextdotjs, SiTypescript } from "react-icons/si";

import PORItemContainer from "@/portfolioItem/PORItemContainer";
import PORItemLogo from "@/portfolioItem/PORItemLogo";
import PORItems from "@/portfolioItem/PORItems";
import PORItemTitle from "@/portfolioItem/PORItemTitle";
import PORLowerItem from "@/portfolioItem/PORLowerItem";
import PORUpperItem from "@/portfolioItem/PORUpperItem";

export default function Experiense() {
    return (
        <>
            <h1 className="text-4xl">経験</h1>
            {/* 言語ここから */}
            <PORItems>
                <PORItemContainer>
                    <PORUpperItem>
                        <PORItemLogo>
                            <IoLogoJavascript size={60} />
                        </PORItemLogo>
                        <PORItemTitle>JavaScript</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/GunmaRamens/js_practice/tree/main">js_practice</Link>
                            </li>
                        </ol>
                    </PORLowerItem>
                </PORItemContainer>
                <PORItemContainer>
                    <PORUpperItem>
                        <PORItemLogo>
                            <SiTypescript size={60} />
                        </PORItemLogo>
                        <PORItemTitle>TypeScript</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/calculator-app">calculator-app</Link>
                            </li>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/smart-task-manager">
                                    smart-task-manager( コードが汚すぎるのでいつか作り直す )
                                </Link>
                            </li>
                            <li>このサイト</li>
                        </ol>
                    </PORLowerItem>
                </PORItemContainer>
                <PORItemContainer>
                    <PORUpperItem>
                        <PORItemLogo>
                            <FaPython size={60} />
                        </PORItemLogo>
                        <PORItemTitle>Python</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>ちょっとだけ。</PORLowerItem>
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
                        <PORItemTitle>React</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/calculator-app">calculator-app</Link>
                            </li>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/smart-task-manager">
                                    smart-task-manager( コードが汚すぎるのでいつか作り直す )
                                </Link>
                            </li>
                            <li>このサイト</li>
                        </ol>
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
                        <PORItemTitle>Next.js</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>
                        <ol>
                            <li>このサイト</li>
                        </ol>
                    </PORLowerItem>
                </PORItemContainer>
                <PORItemContainer>
                    <PORUpperItem>
                        <PORItemLogo>
                            <IoLogoIonic size={60} />
                        </PORItemLogo>
                        <PORItemTitle>Ionic Framework</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/calculator-app">calculator-app</Link>
                            </li>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/smart-task-manager">
                                    smart-task-manager( コードが汚すぎるのでいつか作り直す )
                                </Link>
                            </li>
                        </ol>
                    </PORLowerItem>
                </PORItemContainer>
                <PORItemContainer>
                    <PORUpperItem>
                        <PORItemLogo>
                            <RiTailwindCssFill size={60} />
                        </PORItemLogo>
                        <PORItemTitle>TailWind CSS</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>
                        <ol>
                            <li>このサイト</li>
                        </ol>
                    </PORLowerItem>
                </PORItemContainer>
                <PORItemContainer>
                    <PORUpperItem>
                        <PORItemLogo>
                            <SiMui size={60} />
                        </PORItemLogo>
                        <PORItemTitle>Material UI</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>少しだけ。</PORLowerItem>
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
                        <PORItemTitle>Filleting Fishes</PORItemTitle>
                    </PORUpperItem>
                    <PORLowerItem>
                        <p>魚捌けます！！！</p>
                    </PORLowerItem>
                </PORItemContainer>
            </PORItems>
            {/* その他ここまで */}
        </>
    );
}
