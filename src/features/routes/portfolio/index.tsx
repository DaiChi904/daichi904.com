"use client";

import { Container } from "@/components/layouts";

import PortfolioMenuButtons from "./menu";
import PortfolioContentsRender from "./PortfolioContentsRender";
import PortfolioTabProvider from "./PortfolioTabProvider";

export default function PortfolioPageContent() {
    return (
        <PortfolioTabProvider>
            <Container>
                <PortfolioMenuButtons />
                <PortfolioContentsRender />
            </Container>
        </PortfolioTabProvider>
    );
}
