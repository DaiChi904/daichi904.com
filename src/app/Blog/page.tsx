"use client"
import { useState } from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";

function Blog() {
    const [changeAppStatus, setChangeAppStatus] = useState(false)
    setTimeout(() => {
    setChangeAppStatus(true);
    }, 500); /* 2秒後にchangeAppStatusをtrueに変更 */

    

    return(
        <>
            <div className="flex flex-col h-screen items-center">
                <div className="flex items-start">
                    <Header />
                </div>
                <div className={changeAppStatus ? "flex flex-col h-full transition-opacity duration-700 opacity-100 ease-in-out" : "transition-opacity duration-700 opacity-0 ease-in-out"}>
                    <main className="flex grow justify-center items-center">
                        <h1 className="text-4xl">気が向いたら書きます。</h1>
                    </main>
                    </div>
                    <div className="flex grow justify-center items-end mb-3">
                        <Footer />
                </div>
            </div>
        </>
        
    );
}

export default Blog;