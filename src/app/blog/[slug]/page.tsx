"use client";

import { useEffect } from "react";

import { Typography } from "@/components/element";
import { BaseLayout } from "@/components/layouts";
import ArticlePageContent from "@/features/routes/blog/blogPage";
import { useMicroCMS } from "@/hooks/microCMS";

export default function Article({ params }: { params: { slug: string } }) {
    const { blog, getBlog } = useMicroCMS();
    useEffect(() => {
        getBlog(params.slug);
    }, []);
    console.log(blog);
    if (!blog)
        return (
            <BaseLayout>
                <Typography>Failed to fetch article.</Typography>
            </BaseLayout>
        );
    return (
        <BaseLayout>
            <ArticlePageContent blog={blog} />
        </BaseLayout>
    );
}
