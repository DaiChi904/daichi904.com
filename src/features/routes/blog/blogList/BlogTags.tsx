import Chip from "@/components/element/chip/Chip";
import ChipGroup from "@/components/element/chip/ChipGroup";
import { BlogAbstract } from "@/types/blog.types";

export default function BlogTags({ abstract }: { abstract: BlogAbstract }) {
    return (
        <ChipGroup>
            {abstract.tags.map((tag) => (
                <Chip key={tag} label={tag} className="m-0.5" />
            ))}
        </ChipGroup>
    );
}
