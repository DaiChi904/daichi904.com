import { useState, useEffect, useRef} from "react"
import Link from "next/link"

function Header() {
    return(
        <>
          <div className="flex w-full text-zinc-100 items-center justify-center border-b-2 border-dashed pb-2 mt-2">
            <ul className="flex justify-center">
              <li className="text-2xl border-2 border-zinc-100 mx-0.5 rounded text-center">
                <Link className="block w-full h-full px-10 hover:bg-purple-600 hover:opacity-95" href="/">Home</Link>
              </li>
              <li className="text-2xl border-2 border-zinc-100 mx-0.5 rounded">
                <Link className="block w-full h-full px-10 hover:bg-purple-600 hover:opacity-95" href="/profile">Profile</Link>
              </li>
              <li className="text-2xl border-2 border-zinc-100 mx-0.5 rounded">
                <Link className="block w-full h-full px-10 hover:bg-purple-600 hover:opacity-95" href="/portfolio">Portfolio</Link>
              </li>
              <li className="text-2xl border-2 border-zinc-100 mx-0.5 rounded">
                <Link className="block w-full h-full px-10 hover:bg-purple-600 hover:opacity-95" href="/Blog">Blog</Link>
              </li>
              <li className="text-2xl border-2 border-zinc-100 mx-0.5 rounded">
                <Link className="block w-full h-full px-10 hover:bg-purple-600 hover:opacity-95" href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </>
    );
}

export default Header;