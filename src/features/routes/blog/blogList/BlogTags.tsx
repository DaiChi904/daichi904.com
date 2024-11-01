import Chip from "@/components/element/chip/Chip";
import ChipGroup from "@/components/element/chip/ChipGroup";
import GridV2 from "@/components/element/gridV2/GridV2";
import { BlogAbstract } from "@/types/blog.types";

export default function BlogTags({ abstract }: { abstract: BlogAbstract }) {
    return (
        <GridV2 container xSize={1} ySize={1} className="h-8 items-center">
            <ChipGroup>
                {abstract.tags.map((tag) => (
                    <Chip key={tag} label={tag} className="m-0.5" />
                ))}
            </ChipGroup>
        </GridV2>
    );
}
