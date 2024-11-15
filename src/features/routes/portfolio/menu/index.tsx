import { GridV2 } from "@/components/element";

import TabButton from "./TabButton";

export default function PortfolioMenuButtons() {
    return (
        <GridV2 xSize={3} ySize={1} container className="relative m-1 w-full gap-2 px-10">
            <TabButton label="carrer">経歴</TabButton>
            <TabButton label="experience">経験</TabButton>
            <TabButton label="myProjects">プロジェクト</TabButton>
        </GridV2>
    );
}
