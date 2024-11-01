import { ReactNode } from "react";

type TextSize = "small" | "default" | "medium" | "mediumPlus" | "large" | "largePlus";
type TextAlign = "start" | "center" | "end";

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

const dynamicTextSize: { [key: string]: string } = {
    small: "text-xs",
    default: "text-base",
    medium: "text-2xl",
    mediumPlus: "text-4xl",
    large: "text-6xl",
    largePlus: "text-8xl",
};

const dynamicTextAlign: { [key: string]: string } = {
    start: "text-start",
    center: "text-center",
    end: "text-end",
};
