"use client";

import { useEffect } from "react";

import Typography from "@/components/element/Typography";
import Container from "@/components/layouts/Container";
import { useMicroCMS } from "@/hooks/microCMS";

import BlogList from "./blogList";

export default function BlogHomePageContent() {
    const { blogAbstracts, getBlogAbstracts } = useMicroCMS();
    useEffect(() => {
        getBlogAbstracts();
    }, []);
    console.log(blogAbstracts);
    return (
        <Container justifyContent="center" alignItems="center">
            {blogAbstracts ? <BlogList abstracts={blogAbstracts} /> : <Typography>Failed to fetch blogs</Typography>}
        </Container>
    );
}
