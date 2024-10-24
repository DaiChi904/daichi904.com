import { ReactNode } from "react";

import { dynamicColSpan } from "@/style/dynamicPrams/grid/dynamicColSpan";
import { dynamicGridCols } from "@/style/dynamicPrams/grid/dynamicGridCols";
import { dynamicGridRows } from "@/style/dynamicPrams/grid/dynamicGridRows";
import { dynamicRowSpan } from "@/style/dynamicPrams/grid/dynamicRowSpan";

interface Props {
    xSize: number;
    ySize: number;
    container?: boolean;
    className?: string;
    children: ReactNode;
}

export default function GridContainer({ xSize, ySize, container, className, children }: Props) {
    const horizonalSize = container ? `${dynamicGridCols[xSize]}` : `${dynamicColSpan[xSize]}`;
    const verticalSize = container ? `${dynamicGridRows[ySize]}` : `${dynamicRowSpan[ySize]}`;

    const appliedStyle = `grid ${container && "grow"} ${horizonalSize} ${verticalSize} ${className}`;

    return <div className={appliedStyle}>{children}</div>;
}
