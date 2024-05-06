export default function PORLowerItem({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col justify-center items-center  border-t-2 border-dashed p-1">
            {children}
        </div>
    )
}