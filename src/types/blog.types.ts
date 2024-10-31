export type Samnail = {
    url: string;
    height: number;
    width: number;
};

export type BlogAbstract = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    sumnail: Samnail;
    tags: string[];
    title: string;
};

export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    sumnail: Samnail;
    tags: string[];
    title: string;
    body: string;
};

export type BlogAbstractsResponse = {
    contents: Blog[];
    totalCount: number;
    offset: number;
    limit: number;
};

export type BlogResponse = {
    contents: Blog[];
    totalCount: number;
    offset: number;
    limit: number;
};
