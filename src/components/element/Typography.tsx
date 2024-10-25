import { ReactNode } from "react";

import { dynamicTextAlign, dynamicTextSize, TextAlign, TextSize } from "@/style/dynamicPrams/typography";

interface Props {
    size?: TextSize;
    textAlign?: TextAlign;
    className?: string;
    children: ReactNode;
}

export default function Typography({ size, textAlign, className, children }: Props) {
    const appliedStyle = `${dynamicTextSize[`${size ? size : "default"}`]} ${dynamicTextAlign[`${textAlign ? textAlign : "start"}`]} ${className}`;
    return <p className={appliedStyle}>{children}</p>;
}
