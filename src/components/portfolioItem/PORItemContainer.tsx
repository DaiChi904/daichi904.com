export default function PORItemContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className="m-1 flex flex-col rounded-lg border-2 sm:w-5/6 l-sm:w-5/12">{children}</div>;
}
