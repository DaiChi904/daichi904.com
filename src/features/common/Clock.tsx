/* Hydration対策 */
"use client";

import { useEffect, useState } from "react";

import Typography from "@/components/element/Typography";

/* 時計の基礎コンポーネント */
function Clock({ mode }: { mode: "nomal" | "full" }) {
    const [time, setTime] = useState("");
    useEffect(() => {
        setTime(getTime(mode)); /* 1回目のレンダリング */
        setInterval(() => {
            setTime(getTime(mode));
        }, 1000);
    }, []);

    return (
        <div className="transition-opacity duration-1000">
            <Typography size="medium">{time}</Typography>
        </div>
    );
}

function getTime(mode: "nomal" | "full") {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hour = time.getHours();
    const minite = time.getMinutes();
    if (mode === "full") {
        if (minite < 10) {
            return year + "年" + month + "月" + date + "日 " + hour + "：0" + minite;
        } else {
            return year + "年" + month + "月" + date + "日 " + hour + "：" + minite;
        }
    } else {
        if (minite < 10) {
            return hour + "：0" + minite;
        } else {
            return hour + "：" + minite;
        }
    }
}

export default Clock;
