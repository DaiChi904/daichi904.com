import Link from "next/link";

function Header() {
    return(
        <div className="flex flex-row flex-warp items-center justify-center w-full">
          <Link href="/" className="flex basis-1/6 h-full items-center justify-center border-2 rounded md:px-0.5 md:mx-0.5 l-md:px-1 l-md:mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded"><p className="sm:text-sm md:text-base l-md:text-2xl">Home</p></Link>
          <Link href="/profile" className="flex basis-1/6 h-full items-center justify-center border-2 rounded md:px-0.5 md:mx-0.5 l-md:px-1 l-md:mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded"><p className="sm:text-sm md:text-base l-md:text-2xl">Profile</p></Link>
          <Link href="/portfolio" className="flex basis-1/6 h-full items-center justify-center border-2 rounded md:px-0.5 md:mx-0.5 l-md:px-1 l-md:mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded"><p className="sm:text-sm md:text-base l-md:text-2xl">Portfolio</p></Link>
          <Link href="/blog" className="flex basis-1/6 h-full items-center justify-center border-2 rounded md:px-0.5 md:mx-0.5 l-md:px-1 l-md:mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded"><p className="sm:text-sm md:text-base l-md:text-2xl">Blog</p></Link>
          <Link href="/contact" className="flex basis-1/6 h-full items-center justify-center border-2 rounded md:px-0.5 md:mx-0.5 l-md:px-1 l-md:mx-1 hover:bg-purple-600 hover:opacity-95 hover:rounded"><p className="sm:text-sm md:text-base l-md:text-2xl">Contact</p></Link>          
        </div>
    );
}

export default Header;