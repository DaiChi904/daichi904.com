"use client"

import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState("")
    useEffect(() => {
        setInterval(() => {
            let currentTime = timeUpdater();
            setTime(currentTime);
        }, 1000);
    }, []);
    return(
        <>
            <div className="flex">
                <p className="flex bg-zinc-100 text-zinc-950 rounded text-xl w-60 h-16 p-2 m-2 justify-center items-center">{time}</p>
            </div>
        </>
    );
};

function timeUpdater() {
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



export default Clock;