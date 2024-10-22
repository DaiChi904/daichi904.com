import { useState } from "react";

import { Article } from "@/types/article.types";
import { supabase } from "@/utils/supabaseClient";

export const useArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    const getArticles = async () => {
        // eslint-disable-next-line prettier/prettier
        const { data, error } = await supabase.from('Articles').select('*');
        if (error) throw error;
        setArticles(data || []);
    };

    return {
        articles,
        getArticles,
    };
};
