import { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Grid({ className, children }: Props) {
    const appliedStyle = `grid ${className}`;
    return <div className={appliedStyle}>{children}</div>;
}
