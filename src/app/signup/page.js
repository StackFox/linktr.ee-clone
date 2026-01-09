'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from 'next/navigation'


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
            toast.loading('Loading...');
            const response = await axios.post('/api/users/signup', user)
            console.log("Signup success: ", response.data);
            toast(response.message)
            router.push("/login")
        } catch (error) {
            console.error("Signup failed: ", error.message)
            toast.error(error.message || 'Sign up failed')
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-slate-400">Join us and start sharing your links</p>
                </div>

                {/* Form Card */}
                <form className="bg-slate-800 rounded-2xl shadow-2xl p-8 space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault()
                        onSignup()
                    }}
                >
                    {/* Username Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-500 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-500 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-500 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Signup Button */}
                    <button
                        disabled={buttonDisabled || loading}
                        type="submit"
                        className={`w-full py-3 rounded-lg font-semibold text-white transition duration-200 ${buttonDisabled
                            ? 'bg-slate-600 opacity-50 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                            }`}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-slate-800 text-slate-400">Already have an account?</span>
                        </div>
                    </div>

                    {/* Login Link */}
                    <Link
                        href="/login"
                        className="block text-center py-2 text-blue-400 hover:text-blue-300 font-medium transition"
                    >
                        Sign In Instead
                    </Link>
                </form>

                {/* Footer Links */}
                <div className="text-center mt-6">
                    <Link
                        href="/forgot"
                        className="text-slate-400 hover:text-slate-300 text-sm transition"
                    >
                        Forgot password?
                    </Link>
                </div>
            </div>
        </div>
    );
}


