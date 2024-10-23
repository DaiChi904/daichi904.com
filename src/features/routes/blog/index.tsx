"use client";

import { useEffect } from "react";

import Container from "@/components/layouts/Container";
import { useArticles } from "@/hooks/articles";

export default function BlogPageContent() {
    const { articles, getArticles, tags, getTags } = useArticles();
    useEffect(() => {
        getArticles();
        getTags();
    }, []);
    console.log(articles, tags);
    return (
        <Container justifyContent="center" alignItems="center">
            {articles.map((article) => article.content)}
        </Container>
    );
}
