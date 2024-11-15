import Box from "@/components/element/Box";
import { usePortfolioTabContext } from "@/hooks/portfolioTabs";

import Carrer from "./portfolioContents/carrer";
import Experiense from "./portfolioContents/experiense";
import MyProjects from "./portfolioContents/myProjects";

export default function PortfolioContentsRender() {
    const { tab } = usePortfolioTabContext();
    return (
        <Box className="flex h-fit w-screen flex-col items-center justify-center opacity-100 transition-opacity duration-700 ease-in-out">
            {tab === "carrer" ? <Carrer /> : tab === "experience" ? <Experiense /> : tab === "myProjects" && <MyProjects />}
        </Box>
    );
}
