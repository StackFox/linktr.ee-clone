"use client"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav
            className={`sticky top-0 flex flex-row mt-20 items-center bg-white text-xl text-black rounded-full w-400 mx-auto`}>
            {/* Logo and Links (Left) */}
            <div className="flex items-center gap-8">
                <div className="p-8 items-center justify-center">
                    <Link href={"/"}>
                        <Image
                            loading="eager"
                            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                            alt="logo"
                            className=""
                            width={140}
                            height={140}
                        />
                    </Link>
                </div>
                <ul className="flex gap-8">
                    <li><Link href={"/products"}>Products</Link></li>
                    <li><Link href={"/templates"}>Templates</Link></li>
                    <li><Link href={"/marketplace"}>Marketplace</Link></li>
                    <li><Link href={"/learn"}>Learn</Link></li>
                    <li><Link href={"/pricing"}>Pricing</Link></li>
                </ul>
            </div>

            {/* Login/Signup Buttons (Right) */}
            <div className="ml-auto pr-4">
                <button className="rounded-lg text-lg mr-1 p-4 bg-gray-200">Log in</button>
                <button className="rounded-4xl ml-1 p-4 bg-black text-white">Sign up free</button>
            </div>
        </nav>
    )
}

export default Navbar
