import Link from "next/link";

import Typography from "@/components/element/Typography";
import { Grid } from "@/features/common/grid";
import { Abstract } from "@/types/article.types";

export default function AbstractCrad({ abstract }: { abstract: Abstract }) {
    return (
        <Link href={`/blog/${abstract.id}`} className="block">
            <Grid className="grid-flow-col grid-cols-2 border-y-2 py-2">
                <Typography>{abstract.title}</Typography>
                <Typography>{abstract.createdAt}</Typography>
            </Grid>
        </Link>
    );
}
