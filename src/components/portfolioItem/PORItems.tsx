export default function PORItems({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-row flex-wrap justify-center w-full p-1 pb-4 m-1 border-b">
            {children}
        </div>
    )
}