import Image from "next/image";

import { basePath } from "../../../next.config.js";
const BASE_PATH = basePath ? basePath : "";

interface Props {
    src: string;
    useOutsideSrc?: boolean;
    maxWidth: number;
    maxHeight: number;
    alt: string;
    fit?: boolean;
    className?: string;
}

/**
 * Define fit to true, if you want to fit the size of image to parent's content.
 */
export default function ConfiguredImage({ src, useOutsideSrc, maxWidth, maxHeight, alt, fit, className }: Props) {
    const _maxWidth = fit ? 10000 : maxWidth;
    const _maxHeight = fit ? 10000 : maxHeight;
    const _src = !useOutsideSrc ? BASE_PATH + src : src;
    return (
        <Image src={_src} width={_maxWidth} height={_maxHeight} alt={alt} className={`flex ${fit && "size-fit"} ${className}`} />
    );
}
