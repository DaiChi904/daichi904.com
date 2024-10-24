"use client";

import { useEffect } from "react";

import Typography from "@/components/element/Typography";
import BaseLayout from "@/components/layouts/BaseLayout";
import ArticlePageContent from "@/features/routes/blog/articlePage";
import { useArticles } from "@/hooks/articles";

export default function Article({ params }: { params: { slug: string } }) {
    const { article, getArticleById } = useArticles();
    useEffect(() => {
        getArticleById(params.slug);
    }, []);
    if (!article)
        return (
            <BaseLayout>
                <Typography>Failed to fetch article.</Typography>
            </BaseLayout>
        );
    return (
        <BaseLayout>
            <ArticlePageContent article={article} />
        </BaseLayout>
    );
}
