import { ReactNode } from "react";

type Position = "start" | "center" | "end";

interface Props {
    margin?: string;
    padding?: string;
    gap?: string;
    gridColumns: string;
    gridRows: string;
    justifyContent?: Position;
    justifyItems?: Position;
    alignContent?: Position;
    alignItems?: Position;
    grow?: boolean;
    children: ReactNode;
}

/**
 * margin, padding, gap, gridColumns and gridRows are need to passed as tailwind's value.
 */
export default function GridContainer({
    margin,
    padding,
    gap,
    gridColumns,
    gridRows,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    grow,
    children,
}: Props) {
    const _justifyContent =
        justifyContent === "start"
            ? "justify-start"
            : justifyContent === "center"
              ? "justify-center"
              : justifyContent === "end" && "justify-end";
    const _justifyItems =
        justifyItems === "start"
            ? "justify-items-start"
            : justifyItems === "center"
              ? "justify-items-center"
              : justifyItems === "end" && "justify-items-end";
    const _alignContent =
        alignContent === "start"
            ? "content-start"
            : alignContent === "center"
              ? "content-center"
              : alignContent === "end" && "content-end";
    const _alignItems =
        alignItems === "start" ? "items-start" : alignItems === "center" ? "items-center" : alignItems === "end" && "items-end";

    const appliedStyle = `grid size-full grid-cols- ${grow || (grow === undefined && grow)} ${margin} ${padding} ${gap} ${gridColumns} ${gridRows} ${_justifyContent} ${_justifyItems} ${_alignContent} ${_alignItems}`;

    return <div className={appliedStyle}>{children}</div>;
}
