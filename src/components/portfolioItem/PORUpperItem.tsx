export default function PORUpperItem({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-row items-center border-b-2 border-dashed w-full">
            {children}
        </div>
    )
}