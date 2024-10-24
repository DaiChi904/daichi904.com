export type TextSize = "small" | "default" | "medium" | "mediumPlus" | "large" | "largePlus";

export const dynamicTextSize: { [key: string]: string } = {
    small: "text-xs",
    default: "text-base",
    medium: "text-2xl",
    mediumPlus: "text-4xl",
    large: "text-8xl",
    largePlus: "text-8xl",
};
