export default function PORUpperItem({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-row items-center w-full">
            {children}
        </div>
    )
}