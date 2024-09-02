"use client";

import { useState } from "react";

import Container from "@/components/layouts/Container";

import Carrer from "./Carrer";
import Experiense from "./Experiense";

type TabType = "experience" | "carrer";

export default function PortfolioPageContent() {
    const [selectedTab, setSelectedTab] = useState<TabType>("experience");

    const [isChangeing, setIsChangeing] = useState(false);
    const [isReady, setIsReady] = useState(true);

    const handleChnageTab = (tab: TabType) => {
        if (tab === selectedTab) return;
        setIsReady(false);
        setTimeout(() => {
            setIsChangeing(true);
            if (tab === "carrer") {
                setSelectedTab("carrer");
            } else {
                setSelectedTab("experience");
            }
        }, 700);
        setTimeout(() => {
            setIsChangeing(false);
            setIsReady(true);
        }, 700);
    };

    return (
        <Container>
            <div className="m-2 flex w-full flex-row items-center justify-center">
                <button
                    className={
                        selectedTab === "carrer"
                            ? "flex h-full basis-1/3 items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                            : "flex h-full basis-1/3 items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                    }
                    onClick={() => handleChnageTab("carrer")}
                >
                    経歴
                </button>
                <button
                    className={
                        selectedTab === "experience"
                            ? "flex h-full basis-1/3 items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                            : "flex h-full basis-1/3 items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                    }
                    onClick={() => handleChnageTab("experience")}
                >
                    経験
                </button>
            </div>
            <div
                className={
                    !isChangeing && isReady
                        ? "flex h-fit w-screen flex-col items-center justify-center opacity-100 transition-opacity duration-700 ease-in-out"
                        : "flex h-fit w-screen flex-col items-center justify-center opacity-0 transition-opacity duration-700 ease-in-out"
                }
            >
                {selectedTab === "carrer" && !isChangeing ? (
                    <Carrer />
                ) : selectedTab === "experience" && !isChangeing ? (
                    <Experiense />
                ) : null}
            </div>
        </Container>
    );
}
