"use client";

import { useEffect } from "react";

import { useArticles } from "@/hooks/articles";

export default function Article({ params }: { params: { slug: string } }) {
    const { article, getArticleById } = useArticles();
    useEffect(() => {
        getArticleById(params.slug);
    }, []);
    return (
        <>
            {article?.title}
            {article?.content}
        </>
    );
}
