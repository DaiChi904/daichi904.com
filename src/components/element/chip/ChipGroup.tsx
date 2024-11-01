export default function ChipGroup({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex size-min flex-row">{children}</div>;
}
