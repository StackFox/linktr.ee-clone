"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function loginPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const isValid =
            user.password.length > 0 &&
            user.username.length > 0

        setButtonDisabled(!isValid)
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', user)
            console.log("Login success: ", response.data)
            toast.success('Login successful')
            router.push("/admin")
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.error || error.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Form */}
            <div className="relative flex items-center justify-center p-8 bg-white h-full">
                {/* Logo */}
                <div className="absolute top-8 left-8">
                    <Link href="/">
                        <Image
                            loading="eager"
                            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                            alt="logo"
                            width={100}
                            height={100}
                            className="w-auto h-8 md:h-7.5"
                        />
                    </Link>
                </div>
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-black mb-2">Login</h1>
                        <p className="text-slate-700">Welcome back, log in to your account</p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onLogin();
                        }}
                        className="space-y-6"
                    >
                        {/* Username Field */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-100 text-black placeholder-slate-500 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-100 text-black placeholder-slate-500 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Button */}
                        <button
                            disabled={buttonDisabled || loading}
                            type="submit"
                            className={`w-full py-3 rounded-lg font-semibold text-white transition duration-200 ${buttonDisabled
                                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                                : 'bg-black hover:bg-neutral-800 shadow-lg hover:shadow-xl cursor-pointer'
                                }`}
                        >
                            {loading ? 'Logging in...' : 'Log in'}
                        </button>

                        {/* Divider/Links */}
                        <div className="text-center space-y-4">
                            <p className="text-sm text-slate-500">
                                Don't have an account?{" "}
                                <Link
                                    href="/signup"
                                    className="text-blue-500 hover:text-blue-600 font-medium transition"
                                >
                                    sign up instead
                                </Link>
                            </p>

                            <div className="text-center">
                                <Link
                                    href="/forgot"
                                    className="text-slate-400 hover:text-slate-500 text-sm font-medium transition"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:flex bg-[#e9f0ff] items-center justify-center h-screen">
                <img 
                    src="/banner-login-desktop-D8selsDi.png" 
                    alt="banner-login" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}