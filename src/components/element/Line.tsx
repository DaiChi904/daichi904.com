type LineStyle = "default" | "dashed" | "double" | "hidden";

interface Props {
    lineStyle?: LineStyle;
    className?: string;
}

export default function Line({ lineStyle, className }: Props) {
    return <hr className={`${dynamicLineStyle[`${lineStyle ? lineStyle : "border-solid"}`]} ${className}`} />;
}

const dynamicLineStyle: { [key: string]: string } = {
    default: "border-splid",
    double: "border-double",
    dotted: "border-dotted",
    dashed: "border-dashed",
    hidden: "border-hidden",
};
