import Link from "next/link"

function Header() {
    return(
        <>
            <div className="flex text-zinc-100 w-auto items-center justify-center">
                  <ul className="flex justify-center">
                    <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                      <Link href="./pages/profile">Profile</Link>
                    </li>
                    <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">
                      <Link href="./portfolio">Portfolio</Link>
                    </li>
                    <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">Blog</li>
                    <li className="text-2xl px-10 border-2 border-zinc-100 mx-0.5 rounded">SNS</li>
                  </ul>
              </div>
        </>
    );
}

export default Header;