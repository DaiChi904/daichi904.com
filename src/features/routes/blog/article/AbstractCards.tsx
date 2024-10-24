import GridV2 from "@/components/element/gridV2/GridV2";
import { Abstract } from "@/types/article.types";

import AbstractCrad from "./AbstractCard";

export default function AbstractCards({ abstracts }: { abstracts: Abstract[] }) {
    return (
        <GridV2 container xSize={4} ySize={2} className="gap-10 px-10">
            {abstracts.map((abstract) => (
                <AbstractCrad key={abstract.id} abstract={abstract} />
            ))}
        </GridV2>
    );
}
