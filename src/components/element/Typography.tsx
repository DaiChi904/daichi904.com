import { ReactNode } from "react";

import { dynamicTextSize, TextSize } from "@/style/dynamicPrams/typography/dynamicTextSize";
import { dynamicTextAlign } from "@/style/dynamicPrams/typography/dynamicTextAlign";

interface Props {
    size?: TextSize;
    textAlign?: "start" | "center" | "end";
    className?: string;
    children: ReactNode;
}

/**
 * textColor, margin and padding are need to passed as tailwind's value.
 */
export default function Typography({ size, textAlign, className, children }: Props) {
    const appliedStyle = `${dynamicTextSize[`${size ? size : "default"}`]} ${dynamicTextAlign[`${textAlign ? textAlign : "start"}`]} ${className}`;
    return <p className={appliedStyle}>{children}</p>;
}
