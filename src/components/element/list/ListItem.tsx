export default function ListItem({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <li>{children}</li>;
}
