import { useMemo, useState } from "react";

import Box from "@/components/element/Box";
import { PortfolioTabs, usePortfolioTabContext } from "@/hooks/portfolioTabs";

import Carrer from "./portfolioContents/carrer";
import Experiense from "./portfolioContents/experiense";
import MyProjects from "./portfolioContents/myProjects";

const switchingTime = 500;

export default function PortfolioContentsRender() {
    const { tab } = usePortfolioTabContext();
    const [isSwitching, setIsSwitching] = useState<boolean>(false);
    const [renderedTab, setRenderedTab] = useState<PortfolioTabs>(tab);

    useMemo(() => {
        setIsSwitching(true);
        setTimeout(() => {
            setRenderedTab(tab);
            setIsSwitching(false);
        }, switchingTime);
    }, [tab]);
    return (
        <Box
            className={
                !isSwitching
                    ? "flex h-fit w-screen flex-col items-center justify-center opacity-100 transition-opacity duration-500 ease-in-out"
                    : "-z-10 flex h-fit w-screen flex-col items-center  justify-center opacity-0 transition-opacity duration-500 ease-in-out"
            }
        >
            {renderedTab === "carrer" ? (
                <Carrer />
            ) : renderedTab === "experience" ? (
                <Experiense />
            ) : (
                renderedTab === "myProjects" && <MyProjects />
            )}
        </Box>
    );
}
