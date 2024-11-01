export default function UnorderedList({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <ol className="list-disc">{children}</ol>;
}
