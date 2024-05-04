"use client"

import Footer from "@/footer";
import Header from "@/header";
import { useState } from "react";

export default function BaseLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const [isReloaded, setIsReloaded] = useState(false);
    setTimeout(() => {
        setIsReloaded(true);
    }, 500);
    return (
        <>
            <div className="flex flex-col w-screen h-screen items-center justify-between">
                <div className="flex w-full">
                    <Header />
                </div>
                <div className={isReloaded ? "flex flex-col h-full transition-opacity duration-700 opacity-100 ease-in-out " : "transition-opacity duration-700 opacity-0 ease-in-out"}>
                    {children}
                </div>
                <div className="flex grow justify-center items-end mb-3">
                    <Footer />
                </div>
            </div>
        </>
    )
}