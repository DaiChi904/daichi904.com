import Link from "next/link";
import { FaPython, FaReact } from "react-icons/fa";
import { IoFishOutline, IoLogoIonic, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiNextdotjs, SiTypescript } from "react-icons/si";

import { GridContainer } from "@/components/element/grid";
import Typography from "@/components/element/Typography";

import Item from "../../../../common/Item";

const iconSize = 60;

export default function Experiense() {
    return (
        <>
            <Typography size="mediumPlus">経験</Typography>
            <GridContainer padding="py-5 px-10" gap="gap-x-10 gap-y-6" gridColumns="grid-cols-2" gridRows="grid-rows-2">
                <Item
                    icon={<IoLogoJavascript size={iconSize} />}
                    itemTitle="JavaScript"
                    itemContent={<Typography>軽く触っただけです。</Typography>}
                />
                <Item
                    icon={<SiTypescript size={iconSize} />}
                    itemTitle="TypeScript"
                    itemContent={
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/todo-app">todo-app</Link>
                            </li>
                            <li className="hover:text-purple-600">
                                <Link href="https://daichi904.github.io/daichi904.com/portfolio">daichi904.com</Link>
                            </li>
                        </ol>
                    }
                />
                <Item
                    icon={<FaPython size={iconSize} />}
                    itemTitle="Python"
                    itemContent={<Typography>大学の講義や課題で少しだけ。</Typography>}
                />
            </GridContainer>
            <GridContainer padding="py-5 px-10" gap="gap-x-10 gap-y-6" gridColumns="grid-cols-2" gridRows="grid-rows-1">
                <Item
                    icon={<FaReact size={iconSize} />}
                    itemTitle="React"
                    itemContent={
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/todo-app">todo-app</Link>
                            </li>
                            <li className="hover:text-purple-600">
                                <Link href="https://daichi904.github.io/daichi904.com/portfolio">daichi904.com</Link>
                            </li>
                        </ol>
                    }
                />
            </GridContainer>
            <GridContainer padding="py-5 px-10" gap="gap-x-10 gap-y-6" gridColumns="grid-cols-2" gridRows="grid-rows-2">
                <Item
                    icon={<SiNextdotjs size={iconSize} />}
                    itemTitle="Next.js"
                    itemContent={
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/todo-app">todo-app</Link>
                            </li>
                            <li className="hover:text-purple-600">
                                <Link href="https://daichi904.github.io/daichi904.com/portfolio">daichi904.com</Link>
                            </li>
                        </ol>
                    }
                />
                <Item
                    icon={<RiTailwindCssFill size={iconSize} />}
                    itemTitle="TailWind CSS"
                    itemContent={
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/todo-app">todo-app</Link>
                            </li>
                            <li className="hover:text-purple-600">
                                <Link href="https://daichi904.github.io/daichi904.com/portfolio">daichi904.com</Link>
                            </li>
                        </ol>
                    }
                />
                <Item
                    icon={<SiMui size={iconSize} />}
                    itemTitle="Material UI"
                    itemContent={
                        <ol>
                            <li>少しだけ。</li>
                        </ol>
                    }
                />
                <Item
                    icon={<IoLogoIonic size={iconSize} />}
                    itemTitle="Ionic Framework"
                    itemContent={
                        <ol>
                            <li className="hover:text-purple-600">
                                <Link href="https://github.com/DaiChi904/smart-task-manager">smart-task-manager</Link>
                                <Typography>一応残していますが、黒歴史です。</Typography>
                            </li>
                        </ol>
                    }
                />
            </GridContainer>
            <GridContainer padding="py-5 px-10" gap="gap-x-10 gap-y-6" gridColumns="grid-cols-2" gridRows="grid-rows-1">
                <Item
                    icon={<IoFishOutline size={iconSize} />}
                    itemTitle="Filleting Fishes"
                    itemContent={<Typography>魚捌けます！！！</Typography>}
                />
            </GridContainer>
        </>
    );
}
