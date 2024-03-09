/* Hydration対策 */
"use client"

import { useState, useEffect } from "react";

/* 時計の基礎コンポーネント */
function Clock() {
    const [time, setTime] = useState("")
    useEffect(() => {
        setInterval(() => {
            let currentTime = oneDay_timeUpdater();
            setTime(currentTime);
        }, 1000);
    }, []);
    return(
        <>
            {time}
        </>
    );
};

/* 関数-年月日時間の全て */
function full_timeUpdater() {
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
function oneDay_timeUpdater() {
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