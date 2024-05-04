export default function PORItemContainer({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col border-2 rounded-lg w-5/12 m-1">
            {children}
        </div>
    )
}