import { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Box({ className, children }: Props) {
    return <div className={className}>{children}</div>;
}