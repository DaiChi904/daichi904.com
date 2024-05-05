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
            <div className="flex flex-col min-h-screen max-h-full w-screen justify-between">
                <div className="flex w-full">
                    <Header />
                </div>
                <div className={isReloaded ? "flex grow flex-col transition-opacity duration-700 opacity-100 ease-in-out " : "transition-opacity duration-700 opacity-0 ease-in-out"}>
                    {children}
                </div>
                <div className="flex justify-center mb-3">
                    <Footer />
                </div>
            </div>
        </>
    )
}