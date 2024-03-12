/* 
各JSXコンポーネントのreturnの前に配置。
適用させたい要素全体を下のdiv要素で囲う。
<div className={changeAppStatus ? "transition-opacity duration-700 opacity-100 ease-in-out" : "transition-opacity duration-700 opacity-0 ease-in-out"}></div> 
*/
"use client"
import { useState } from "react"

function PageChangeEffector() {
    const [changeAppStatus, setChangeAppStatus] = useState(false)
    setTimeout(() => {
    setChangeAppStatus(true);
  }, 2000); /* 2秒後にchangeAppStatusをtrueに変更 */
}