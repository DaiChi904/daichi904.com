import Link from "next/link";
import { ReactNode } from "react";

import GridV2 from "@/components/element/gridV2/GridV2";
import Typography from "@/components/element/Typography";

interface Props {
    path: string;
    currentPath: string;
    children: ReactNode;
}

export default function HeaderMenu({ path, currentPath, children }: Props) {
    return (
        <GridV2 xSize={1} ySize={1}>
            <Link href={path} className={`${dynamicMenuStyle[`${path === currentPath ? "selected" : "notSelected"}`]}`}>
                <Typography>{children}</Typography>
            </Link>
        </GridV2>
    );
}

const dynamicMenuStyle: { [key: string]: string } = {
    selected: "flex items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95",
    notSelected: "flex items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95",
};
