import Link from "next/link";

function Header() {
    return(
        <div className="flex flex-row flex-warp items-center justify-center w-full">
          <Link href="/" className="flex basis-1/7 l-md:basis-1/6 h-full items-center justify-center border-2 rounded px-1 mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded">Home</Link>
          <Link href="/profile" className="flex basis-1/7 l-md:basis-1/6 h-full items-center justify-center border-2 rounded px-1 mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded">Profile</Link>
          <Link href="/portfolio" className="flex basis-1/7 l-md:basis-1/6 h-full items-center justify-center border-2 rounded px-1 mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded">Portfolio</Link>
          <Link href="/blog" className="flex basis-1/7 l-md:basis-1/6 h-full items-center justify-center border-2 rounded px-1 mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded">Blog</Link>
          <Link href="/contact" className="flex basis-1/7 l-md:basis-1/6 h-full items-center justify-center border-2 rounded px-1 mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded">Contact</Link>          
        </div>
    );
}

export default Header;