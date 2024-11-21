import { ReactNode } from "react";

interface Props {
    type: "1" | "a" | "A" | "i" | "I";
    start?: number;
    children: ReactNode;
}

export default function OrederedList({ type, start, children }: Props) {
    return (
        <ol type={type} start={start}>
            {children}
        </ol>
    );
}
