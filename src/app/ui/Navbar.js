"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Navbar = () => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Show navbar when scrolling up, hide when scrolling down
            // Add a threshold to prevent immediate hiding on small scrolls
            if (currentScrollY < lastScrollY - 5) {
                // Scrolling up
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY + 5 && currentScrollY > 100) {
                // Scrolling down past 100px with threshold
                setIsVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <nav
            style={{ marginTop: '3rem' }}
            className={`fixed top-0 left-0 right-0 flex flex-row items-center bg-white text-xl text-black rounded-full w-400 mx-auto transition-all duration-500 ease-in-out z-50 ${
                isVisible ? 'translate-y-0' : '-translate-y-[200%]'
            }`}>
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
                <button onClick={() => { router.push("/login") }} className="rounded-lg text-lg mr-1 p-4 bg-gray-200 cursor-pointer">Log in</button>
                <button onClick={() => { router.push("/signup") }} className="rounded-4xl ml-1 p-4 bg-black text-white cursor-pointer">Sign up free</button>
            </div>
        </nav>
    )
}

export default Navbar
