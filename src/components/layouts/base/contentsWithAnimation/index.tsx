"use client";

import { useState } from "react";

import { Box } from "@/components/element";

/**
 * milliseconds
 */
const switchingTime = 500;

export default function ContentsWithAnimation({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isReloaded, setIsReloaded] = useState(false);
    setTimeout(() => {
        setIsReloaded(true);
    }, switchingTime);
    return (
        <Box
            className={
                isReloaded
                    ? "flex grow flex-col opacity-100 transition-opacity duration-700 ease-in-out"
                    : "opacity-0 transition-opacity duration-700 ease-in-out"
            }
        >
            {children}
        </Box>
    );
}
