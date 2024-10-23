import { useState } from "react";

import { Abstract, Article } from "@/types/article.types";
import { supabase } from "@/utils/supabaseClient";

export const useArticles = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [abstracts, setAbstracts] = useState<Abstract[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);

    const getTags = async () => {
        // eslint-disable-next-line prettier/prettier
        const { data, error } = await supabase.from('Articles').select('tags');
        if (error) throw error;
        const parsedTags: string[] = [];
        data.map((tagObjects) =>
            tagObjects.tags?.map((tag) => {
                parsedTags.push(tag);
            }),
        );
        setTags(parsedTags);
    };

    const getAbstracts = async () => {
        // eslint-disable-next-line prettier/prettier
        const { data, error } = await supabase.from('Articles').select('id, tags, createdAt, editedAt, title');
        if (error) throw error;
        setAbstracts(data);
    };

    const getArticles = async () => {
        // eslint-disable-next-line prettier/prettier
        const { data, error } = await supabase.from('Articles').select('*');
        if (error) throw error;
        setArticles(data || []);
    };

    return {
        tags,
        abstracts,
        articles,
        getTags,
        getAbstracts,
        getArticles,
    };
};
