import Image from "next/image";
import Link from "next/link";

import GridV2 from "@/components/element/gridV2/GridV2";
import Typography from "@/components/element/Typography";
import Container from "@/components/layouts/Container";
import { BlogAbstract } from "@/types/blog.types";

import { basePath } from "./../../../../../next.config.js";
const BASE_PATH = basePath ? basePath : "";

export default function AbstractCrad({ abstract }: { abstract: BlogAbstract }) {
    return (
        <Link href={`/blog/${abstract.id}`} className="block">
            <GridV2 container xSize={1} ySize={5} className="rounded-sm border-2 p-1">
                {abstract.sumnail ? (
                    <GridV2 xSize={1} ySize={3}>
                        <Image
                            src={abstract.sumnail.url}
                            width={abstract.sumnail.width}
                            height={abstract.sumnail.height}
                            alt={"samnail"}
                            className="flex size-fit"
                        />
                    </GridV2>
                ) : (
                    <GridV2 xSize={1} ySize={3}>
                        <Image
                            src={BASE_PATH + "/NoImage.jpg"}
                            width={160}
                            height={90}
                            alt={"samnail"}
                            className="flex size-fit"
                        />
                    </GridV2>
                )}
                <GridV2 xSize={1} ySize={2}>
                    <Container>
                        <Typography>{abstract.title}</Typography>
                        <Typography>{abstract.createdAt}</Typography>
                    </Container>
                </GridV2>
            </GridV2>
        </Link>
    );
}
