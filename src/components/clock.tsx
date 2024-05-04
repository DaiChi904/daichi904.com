/* Hydration対策 */
"use client"

import { useState, useEffect } from "react";

/* 時計の基礎コンポーネント */
function Clock({mode}: {mode: string}) {
    const [time, setTime] = useState("");
    useEffect(() => {
        if (mode === "nomal") {
            let currentTime = timeUpdater_nomal();
            setTime(currentTime); /* 1回目のレンダリング */
            setInterval(() => {
            currentTime = timeUpdater_nomal();
            setTime(currentTime);
        }, 1000);
        } else {
            let currentTime = timeUpdater_full();
            setTime(currentTime); /* 1回目のレンダリング */
            setInterval(() => {
            currentTime = timeUpdater_full();
            setTime(currentTime);
        }, 1000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="transition-opacity duration-1000">
            {time}
        </div>
    );
};

/* 関数-年月日時間の全て */
function timeUpdater_full() {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hour = time.getHours();
    let minite = time.getMinutes();
    if (minite < 10) {
        return year + "年" + month + "月" + date  + "日 " + hour  + "：0" + minite;
    } else {
        return year + "年" + month + "月" + date  + "日 " + hour  + "：" + minite;
    }
}

/* 関数-時間のみ */
function timeUpdater_nomal() {
    let time = new Date();
    let hour = time.getHours();
    let minite = time.getMinutes();
    if (minite < 10) {
        return  hour  + "：0" + minite;
    } else {
        return  hour  + "：" + minite;
    }
}


export default Clock;