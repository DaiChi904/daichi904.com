import { useState } from "react";

import { Blog, BlogAbstract, BlogAbstractsResponse, BlogResponse } from "@/types/blog.types";

import { microCMSClient } from "../../libs/client";

export const useMicroCMS = () => {
    if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
        throw new Error("MICROCMS_SERVICE_DOMAIN is required");
    }

    if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
        throw new Error("MICROCMS_SERVICE_DOMAIN is required");
    }

    const [blogAbstracts, setBlogAbstracts] = useState<BlogAbstract[]>();
    const [blog, setBlog] = useState<Blog>();

    const getBlogAbstracts = async () => {
        const response: BlogAbstractsResponse = await microCMSClient.get({
            endpoint: "blogs",
            queries: { fields: "id,createdAt,updatedAt,publishedAt,revisedAt,sumnail,tags,title" },
        });
        setBlogAbstracts(response.contents);
    };

    const getBlog = async (id: string) => {
        const response: BlogResponse = await microCMSClient.get({ endpoint: "blogs", queries: { ids: id } });
        setBlog(response.contents[0]);
    };

    return { blogAbstracts, blog, getBlogAbstracts, getBlog };
};
