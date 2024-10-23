import { GridContainer } from "@/features/common/grid";
import { Abstract } from "@/types/article.types";

import AbstractCrad from "./AbstractCard";

export default function AbstractCards({ abstracts }: { abstracts: Abstract[] }) {
    return (
        <GridContainer gridRows="grid-rows-4" gridColumns="grid-cols-4" padding="px-10" gap="gap-10">
            {abstracts.map((abstract) => (
                <AbstractCrad key={abstract.id} abstract={abstract} />
            ))}
        </GridContainer>
    );
}
