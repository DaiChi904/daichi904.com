/* 時間や曜日によって画像を変化させる機能を追加する */
import Image from "next/image";



function MyIcon() {
    return(
        <>
            <Image className="rounded" src={"/myIcon.PNG"} width={256} height={256} alt="This is my icon" />
        </>
    );
}

export default MyIcon;