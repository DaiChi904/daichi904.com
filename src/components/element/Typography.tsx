import { ReactNode } from "react";

interface Props {
    size?: "small" | "medium" | "mediumPlus" | "large" | "largePlus";
    textAlign?: "start" | "center" | "end";
    textColor?: string;
    margin?: string;
    padding?: string;
    children: ReactNode;
}

/**
 * textColor, margin and padding are need to passed as tailwind's value.
 */
export default function Typography({ size, textAlign, textColor, margin, padding, children }: Props) {
    const textSize =
        size === "small"
            ? "text-xs"
            : size === "medium"
              ? "text-2xl"
              : size === "mediumPlus"
                ? "text-4xl"
                : size === "large"
                  ? "text-6xl"
                  : size === "largePlus"
                    ? "text-8xl"
                    : "text-base";
    const _textAlign =
        textAlign === "start" ? "text-start" : textAlign === "center" ? "text-center" : textAlign === "end" ? "text-end" : "";
    const _textcolor = !textColor ? "text-zinc-100" : textColor;
    const _margin = margin ? margin : "";
    const _padding = padding ? padding : "";
    const appliedStyle = `${textSize} ${_textAlign} ${_textcolor} ${_margin} ${_padding}`;
    return <p className={appliedStyle}>{children}</p>;
}
