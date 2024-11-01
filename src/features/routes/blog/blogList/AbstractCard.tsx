import Link from "next/link";

import Box from "@/components/element/Box";
import GridV2 from "@/components/element/gridV2/GridV2";
import Typography from "@/components/element/Typography";
import { BlogAbstract } from "@/types/blog.types";
import getFormattedDateString from "@/utils/getFormattedDateString";

import BlogTags from "./BlogTags";
import Sumnail from "./Sumnail";

export default function AbstractCrad({ abstract }: { abstract: BlogAbstract }) {
    return (
        <Link href={`/blog/${abstract.id}`} className="rounded-md border-2 p-1">
            <GridV2 container xSize={1} ySize={1} className="h-full justify-between">
                <Box>
                    <Sumnail abstract={abstract} />
                    <BlogTags abstract={abstract} />
                    <Typography size="medium">{abstract.title}</Typography>
                </Box>

                <GridV2 container xSize={2} ySize={1} className="mt-auto">
                    <Typography size="small">{getFormattedDateString(abstract.createdAt)}</Typography>
                    <Typography size="small" textAlign="end">
                        Read more
                    </Typography>
                </GridV2>
            </GridV2>
        </Link>
    );
}
