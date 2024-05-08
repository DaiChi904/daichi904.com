export default function PORItems({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex sm:flex-col md:flex-row flex-wrap sm:items-center justify-center w-full p-1 pb-4 m-1 border-b">
            {children}
        </div>
    )
}