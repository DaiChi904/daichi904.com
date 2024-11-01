"use client";

import { useEffect } from "react";

import Typography from "@/components/element/Typography";
import BaseLayout from "@/components/layouts/BaseLayout";
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
