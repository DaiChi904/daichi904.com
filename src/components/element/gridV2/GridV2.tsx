import { ReactNode } from "react";

interface Props {
    xSize: number;
    ySize: number;
    container?: boolean;
    className?: string;
    children: ReactNode;
}

export default function GridV2({ xSize, ySize, container, className, children }: Props) {
    const horizonalSize = container ? `${dynamicGridCols[xSize]}` : `${dynamicColSpan[xSize]}`;
    const verticalSize = container ? `${dynamicGridRows[ySize]}` : `${dynamicRowSpan[ySize]}`;

    const appliedStyle = `grid ${horizonalSize} ${verticalSize} ${className}`;

    return <div className={appliedStyle}>{children}</div>;
}

const dynamicColSpan: { [key: string]: string } = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
    13: "col-span-13",
};

const dynamicGridCols: { [key: string]: string } = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
    13: "grid-cols-13",
};

const dynamicGridRows: { [key: string]: string } = {
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6",
    7: "grid-rows-7",
    8: "grid-rows-8",
    9: "grid-rows-9",
    10: "grid-rows-10",
    11: "grid-rows-11",
    12: "grid-rows-12",
    13: "grid-rows-13",
};

const dynamicRowSpan: { [key: string]: string } = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
    7: "row-span-7",
    8: "row-span-8",
    9: "row-span-9",
    10: "row-span-10",
    11: "row-span-11",
    12: "row-span-12",
    13: "row-span-13",
};
