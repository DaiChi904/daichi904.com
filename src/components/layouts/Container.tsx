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
            className={`flex grow flex-col
                ${justifyContent === "start" ? "justify-start" : justifyContent === "center" ? "justify-center" : justifyContent === "end" && "justify-end"}
                ${justifyItems === "start" ? "justify-items-start" : justifyItems === "center" ? "justify-items-center" : justifyItems === "end" && "justify-items-end"}
                ${alignContent === "start" ? "content-start" : alignContent === "center" ? "content-center" : alignContent === "end" && "content-end"}
                ${alignItems === "start" ? "items-start" : alignItems === "center" ? "items-center" : alignItems === "end" && "items-end"}`}
        >
            {children}
        </main>
    );
}
