"use client";

import { useState } from "react";

import Footer from "./footer/Footer";
import Header from "./header";

export default function BaseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isReloaded, setIsReloaded] = useState(false);
    setTimeout(() => {
        setIsReloaded(true);
    }, 500);
    return (
        <div className="flex max-h-full min-h-screen w-screen flex-col justify-between">
            <Header />
            <div
                className={
                    isReloaded
                        ? "flex grow flex-col opacity-100 transition-opacity duration-700 ease-in-out"
                        : "opacity-0 transition-opacity duration-700 ease-in-out"
                }
            >
                {children}
            </div>
            <div className="mb-3 flex justify-center">
                <Footer />
            </div>
        </div>
    );
}