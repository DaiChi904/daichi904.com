import Link from "next/link";

function Header() {
    return (
        <div className="flex w-full flex-row flex-wrap items-center justify-center">
            <Link
                href="/"
                className="flex h-full basis-1/6 items-center justify-center rounded border-2 hover:rounded hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Home</p>
            </Link>
            <Link
                href="/profile"
                className="flex h-full basis-1/6 items-center justify-center rounded border-2 hover:rounded hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Profile</p>
            </Link>
            <Link
                href="/portfolio"
                className="flex h-full basis-1/6 items-center justify-center rounded border-2 hover:rounded hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Portfolio</p>
            </Link>
            <Link
                href="/blog"
                className="flex h-full basis-1/6 items-center justify-center rounded border-2 hover:rounded hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Blog</p>
            </Link>
            <Link
                href="/contact"
                className="flex h-full basis-1/6 items-center justify-center rounded border-2 hover:rounded hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Contact</p>
            </Link>
        </div>
    );
}

export default Header;
