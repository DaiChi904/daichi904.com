import { ReactNode } from "react";

type Position = "start" | "center" | "end";

interface Props {
    justifyContent?: Position;
    justifyItems?: Position;
    alignContent?: Position;
    alignItems?: Position;
    children: ReactNode;
}

export default function Container({ justifyContent, justifyItems, alignContent, alignItems, children }: Props) {
    return (
        <main
            className={`flex grow flex-col ${dynamicJustifyContent[`${justifyContent ? justifyContent : "start"}`]} ${dynamicJustifyItems[`${justifyItems ? justifyItems : "start"}`]} ${dynamicAlignContent[`${alignContent ? alignContent : "start"}`]} ${dynamicAlignItems[`${alignItems ? alignItems : "start"}`]}`}
        >
            {children}
        </main>
    );
}

const dynamicJustifyContent: { [key: string]: string } = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
};

const dynamicJustifyItems: { [key: string]: string } = {
    start: "justify-items-start",
    center: "justify-items-center",
    end: "justify-items-end",
};

const dynamicAlignContent: { [key: string]: string } = {
    start: "content-start",
    center: "content-center",
    end: "content-end",
};

const dynamicAlignItems: { [key: string]: string } = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
};
