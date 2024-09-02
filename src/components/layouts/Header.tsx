import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const path = usePathname();
    return (
        <div className="flex w-full flex-row flex-wrap items-center justify-center">
            <Link
                href="/"
                className={
                    path === "/"
                        ? "flex h-full basis-1/6 items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                        : "flex h-full basis-1/6 items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                }
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Home</p>
            </Link>
            <Link
                href="/profile"
                className={
                    path === "/profile"
                        ? "flex h-full basis-1/6 items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                        : "flex h-full basis-1/6 items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                }
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Profile</p>
            </Link>
            <Link
                href="/portfolio"
                className={
                    path === "/portfolio"
                        ? "flex h-full basis-1/6 items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                        : "flex h-full basis-1/6 items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                }
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Portfolio</p>
            </Link>
            <Link
                href="/blog"
                className={
                    path === "/blog"
                        ? "flex h-full basis-1/6 items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                        : "flex h-full basis-1/6 items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                }
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Blog</p>
            </Link>
            <Link
                href="/contact"
                className={
                    path === "/contact"
                        ? "flex h-full basis-1/6 items-center justify-center rounded border-2 bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                        : "flex h-full basis-1/6 items-center justify-center rounded border-2 hover:bg-purple-600 hover:opacity-95 md:mx-0.5 md:px-0.5 l-md:mx-1 l-md:px-1"
                }
            >
                <p className="md:text-base sm:text-sm l-md:text-2xl">Contact</p>
            </Link>
        </div>
    );
}
