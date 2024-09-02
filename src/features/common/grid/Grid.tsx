import { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Grid({ className, children }: Props) {
    return <div className={`grid ${className}`}>{children}</div>;
}
