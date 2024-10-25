export default function HeaderContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full flex-row flex-wrap items-center justify-center border-b-2 border-dashed px-3 pb-2">
            {children}
        </div>
    );
}
