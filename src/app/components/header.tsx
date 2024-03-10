import Link from "next/link"

function Header() {
    return(
        <>
          <div className="flex text-zinc-100 w-screen items-center justify-center border-b-2 border-dashed pb-2 mt-2">
            <ul className="flex justify-center">
              <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                <Link href="/">Home</Link>
              </li>
              <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                <Link href="/Blog">Blog</Link>
              </li>
              <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                <Link href="/SNS">SNS</Link>
              </li>
            </ul>
          </div>
        </>
    );
}

export default Header;