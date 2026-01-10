"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
            router.push('/admin')
        } catch (error) {
            console.error(error);
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="bg-gradient-to-b from-white to-gray-50 mt-12 p-8 rounded-lg shadow-sm mx-auto max-w-md w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onLogin();
                }}
                className="space-y-6"
            >
                {/* Username Field */}
                <div className="space-y-2">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Button */}
                <button
                    disabled={buttonDisabled || loading}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 cursor-pointer rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    {loading ? 'Logging in...' : 'Log in'}
                </button>

                {/* Divider */}
                <div className="text-center">
                    <div className="flex justify-center space-x-2">
                        <div className="w-px h-6 bg-gray-200"></div>
                        <span className="text-sm text-gray-500">or</span>
                        <div className="w-px h-6 bg-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm mt-2">
                        <span className="px-2 bg-gray-100 text-gray-700">Already have an account?</span>
                    </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-center mt-4">
                    <Link
                        href="/forgot"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                    >
                        Forgot password?
                    </Link>
                </div>
            </form>
        </div>
    );
}