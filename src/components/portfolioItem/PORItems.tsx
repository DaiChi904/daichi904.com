export default function PORItems({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="m-1 flex w-full flex-wrap justify-center border-b p-1 pb-4 md:flex-row sm:flex-col sm:items-center">
            {children}
        </div>
    );
}
