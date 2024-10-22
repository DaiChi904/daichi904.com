"use client";

import { useEffect } from "react";

import Typography from "@/components/element/Typography";
import Container from "@/components/layouts/Container";
import { useArticles } from "@/hooks/articles";

export default function BlogPageContent() {
    const { articles, getArticles } = useArticles();
    useEffect(() => {
        getArticles();
    }, []);
    console.log(articles);
    return (
        <Container justifyContent="center" alignItems="center">
            <Typography size="mediumPlus">いつか書こうと思っています。</Typography>
            {articles.map((article) => (
                article.content
            ))}
        </Container>
    );
}
