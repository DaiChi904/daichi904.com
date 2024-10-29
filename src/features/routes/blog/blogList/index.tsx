import GridV2 from "@/components/element/gridV2/GridV2";
import { BlogAbstract } from "@/types/blog.types";

import AbstractCrad from "./AbstractCard";

export default function BlogList({ abstracts }: { abstracts: BlogAbstract[] }) {
    return (
        <GridV2 container xSize={3} ySize={3} className="gap-10 px-10">
            {abstracts.map((abstract) => (
                <AbstractCrad key={abstract.id} abstract={abstract} />
            ))}
        </GridV2>
    );
}
