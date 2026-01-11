'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function SignupPage() {

    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const isValid =
            user.email.length > 0 &&
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

    const onSignup = async () => {
        try {
            setLoading(true)
            toast.dismiss()
            const response = await axios.post('/api/users/signup', user)
            toast.success(response.data.message)
            router.push("/login")
        } catch (error) {
            let errorMessage = error.message || 'Sign up failed'
            if (error.response) {
                errorMessage = error.response.data.message || errorMessage
            }
            toast.error(errorMessage)
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
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-black mb-2">Create Account</h1>
                        <p className="text-slate-700">Join us and start sharing your links</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSignup();
                        }}>
                        {/* Username Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-100 text-black placeholder-slate-500 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-100 text-black placeholder-slate-500 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-100 text-black placeholder-slate-500 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Signup Button */}
                        <button
                            disabled={buttonDisabled || loading}
                            type="submit"
                            className={`w-full py-3 rounded-lg font-semibold text-white transition duration-200 ${buttonDisabled
                                ? 'bg-slate-300 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>

                        {/* Login Link */}
                        <div className="text-center space-y-2">
                            <p className="text-sm text-slate-500">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-blue-500 hover:text-blue-600 font-medium transition"
                                >
                                    Log In Instead
                                </Link>
                            </p>
                            <div>
                                <Link
                                    href="/forgot"
                                    className="text-slate-400 hover:text-slate-500 text-xs transition"
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
                    src="/banner-signup-desktop-Dq7usIXX.png"
                    alt="banner-signup"
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    );
}


