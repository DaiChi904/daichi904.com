import Box from "@/components/element/Box";
import ConfiguredImage from "@/components/element/ConfiguredImage";
import { BlogAbstract } from "@/types/blog.types";

export default function Sumnail({ abstract }: { abstract: BlogAbstract }) {
    return (
        <Box>
            {abstract.sumnail ? (
                <ConfiguredImage
                    src={abstract.sumnail.url}
                    useOutsideSrc
                    maxWidth={abstract.sumnail.width}
                    maxHeight={abstract.sumnail.height}
                    alt={"samnail"}
                    fit
                    className="rounded-md"
                />
            ) : (
                <ConfiguredImage src={"/NoImage.jpg"} maxWidth={480} maxHeight={270} alt={"samnail"} fit className="rounded-md" />
            )}
        </Box>
    );
}
