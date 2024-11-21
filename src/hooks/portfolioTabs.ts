import { Dispatch, SetStateAction, useContext } from "react";
import { createContext } from "react";

export type PortfolioTabs = "experience" | "carrer" | "myProjects";

interface ProfileTabContext {
    tab: PortfolioTabs;
    setTab: Dispatch<SetStateAction<PortfolioTabs>>;
}

export const PortfolioTabContext = createContext<ProfileTabContext | undefined>(undefined);

export const usePortfolioTabContext = () => {
    const context = useContext(PortfolioTabContext);
    if (!context) {
        throw new Error("usePortfolioTabContext must be used within a PortfolioTabProvider");
    }
    return context;
};
