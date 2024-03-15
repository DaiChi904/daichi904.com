/* 時間や曜日によって画像を変化させる機能を追加する */
import Image from "next/image";

import { basePath } from "../../next.config.js";
const BASE_PATH = basePath ? basePath : "";

function MyIcon() {
    return(
        <>
            <Image className="rounded" src={BASE_PATH + "/myIcon.PNG"} width={256} height={256} alt="This is my icon" />
        </>
    );
}

export default MyIcon;