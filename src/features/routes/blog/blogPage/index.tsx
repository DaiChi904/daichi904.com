import Link from "next/link";

import Typography from "@/components/element/Typography";
import Container from "@/components/layouts/Container";
import { Blog } from "@/types/blog.types";

import BlogRender from "../BlogRender";

export default function BlogPageContent({ blog }: { blog: Blog }) {
    return (
        <Container>
            <Link href={"/blog"} className="my-5 ml-10 cursor-pointer rounded-xl bg-white px-2 py-1 shadow-lg">
                <Typography size="medium" className="font-bold text-black">
                    戻る
                </Typography>
            </Link>
            <BlogRender blog={blog} />
        </Container>
    );
}
