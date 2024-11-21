import { ReactNode } from "react";

import { PortfolioTabs, usePortfolioTabContext } from "@/hooks/portfolioTabs";

interface Props {
    label: PortfolioTabs;
    children: ReactNode;
}

export default function TabButton({ label, children }: Props) {
    const { tab, setTab } = usePortfolioTabContext();
    return (
        <button
            className={
                tab === label
                    ? "flex size-full items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                    : "flex size-full items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
            }
            onClick={() => setTab(label)}
        >
            {children}
        </button>
    );
}
