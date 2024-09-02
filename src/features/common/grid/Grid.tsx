import { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Grid({ className, children }: Props) {
    const appledStyle = `grid ${className}`;
    return <div className={appledStyle}>{children}</div>;
}
