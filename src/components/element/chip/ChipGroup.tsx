export default function ChipGroup({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex flex-row">{children}</div>;
}
