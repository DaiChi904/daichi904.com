import { usePathname } from "next/navigation";

import GridV2 from "@/components/element/gridV2/GridV2";

import HeaderMenu from "./HeaderMenu";
import { routingData } from "./routingData";

export default function MenuGroup() {
    const currrentPath = usePathname();
    return (
        <GridV2 container xSize={routingData.length} ySize={1} className="grow gap-2">
            {routingData.map((page) => (
                <HeaderMenu key={page.label} path={page.path} currentPath={currrentPath}>
                    {page.label}
                </HeaderMenu>
            ))}
        </GridV2>
    );
}
