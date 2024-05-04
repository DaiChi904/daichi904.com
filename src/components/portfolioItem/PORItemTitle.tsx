export default function PORItemTitle({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col basis-11/12 justify-center items-center text-2xl mr-14">
            {children}
        </div>
    )
}