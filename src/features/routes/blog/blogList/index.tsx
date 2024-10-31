import GridV2 from "@/components/element/gridV2/GridV2";
import { BlogAbstract } from "@/types/blog.types";

import AbstractCrad from "./AbstractCard";

export default function BlogList({ abstracts }: { abstracts: BlogAbstract[] }) {
    const rowSize = 3;
    const columnSize = (abstracts.length % rowSize) + 1; // Important! Do not change this value.
    return (
        <GridV2 container xSize={rowSize} ySize={columnSize} className="gap-10 p-10">
            {abstracts.map((abstract) => (
                <AbstractCrad key={abstract.id} abstract={abstract} />
            ))}
        </GridV2>
    );
}
