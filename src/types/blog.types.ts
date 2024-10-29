export type Samnail = {
    url: string;
    height: number;
    width: number;
}

export type BlogAbstract = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    sumnail: Samnail;
    tags: string[];
    title: string;
}

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
