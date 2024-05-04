export default function PORItemLogo({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col basis-1/12 justify-center items-center p-2">
            {children}
        </div>
    )
}