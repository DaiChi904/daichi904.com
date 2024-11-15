"use client";

import { useState } from "react";

import { PortfolioTabContext, PortfolioTabs } from "@/hooks/portfolioTabs";

export default function PortfolioTabProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [tab, setTab] = useState<PortfolioTabs>("experience");
    return <PortfolioTabContext.Provider value={{ tab, setTab }}>{children}</PortfolioTabContext.Provider>;
}
