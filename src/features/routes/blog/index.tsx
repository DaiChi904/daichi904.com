"use client";

import { useEffect } from "react";

import Container from "@/components/layouts/Container";
import { useArticles } from "@/hooks/articles";

import AbstractCards from "./article/AbstractCards";

export default function BlogPageContent() {
    const { articles, getArticles, tags, getTags, abstracts, getAbstracts } = useArticles();
    useEffect(() => {
        getArticles();
        getTags();
        getAbstracts();
    }, []);
    console.log(articles, tags, abstracts);
    return (
        <Container justifyContent="center" alignItems="center">
            <AbstractCards abstracts={abstracts} />
        </Container>
    );
}
