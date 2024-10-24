import Link from "next/link";

import GridV2 from "@/components/element/gridV2/GridV2";
import Typography from "@/components/element/Typography";
import { Abstract } from "@/types/article.types";

export default function AbstractCrad({ abstract }: { abstract: Abstract }) {
    return (
        <Link href={`/blog/${abstract.id}`} className="block">
            <GridV2 xSize={1} ySize={2} className="border-y-2 py-2">
                <Typography>{abstract.title}</Typography>
                <Typography>{abstract.createdAt}</Typography>
            </GridV2>
        </Link>
    );
}
