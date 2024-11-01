export type Abstract = {
    id: string;
    tags: string[] | null;
    createdAt: string;
    editedAt: string | null;
    title: string;
};

export type Article = {
    id: string;
    tags: string[] | null;
    createdAt: string;
    editedAt: string | null;
    title: string;
    content: string;
};
