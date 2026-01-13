"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ForgotPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const isValid = email.length > 0

        setIsDisabled(!isValid)
    }, [email])

    const onSubmit = async () => {
        try {
            setLoading(true)
            toast.dismiss()
            const response = await axios.post('/api/users/forgot', { email, password })
            toast.success(response.data.message)
            router.push("/login")
        } catch (error) {
            let errorMessage = error.message || 'Password change failed'
            if (error.response) {
                errorMessage = error.response.data.message || errorMessage
            }
            toast.error(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-[440px] flex flex-col items-center">
                {/* Heading */}
                <h1 className="text-[32px] font-black text-black mb-4 text-center">
                    Forgot username?
                </h1>

                {/* Description */}
                <p className="text-[16px] text-[#676767] text-center mb-10 leading-relaxed px-4">
                    Enter the email address you used to create your account and we&apos;ll send you an email with your username(s).
                </p>

                {/* Form */}
                <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Input Container */}
                    <div className="relative group">
                        <label className="absolute left-4 top-3 text-[12px] text-gray-500 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#eff0ec] pt-7 pb-3 px-4 rounded-xl text-black border-2 border-transparent focus:border-black outline-none transition-all placeholder-transparent"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="relative group">
                        <label className="absolute left-4 top-3 text-[12px] text-gray-500 font-medium">
                            Password
                        </label>
                        <input
                            type="passowrd"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#eff0ec] pt-7 pb-3 px-4 rounded-xl text-black border-2 border-transparent focus:border-black outline-none transition-all placeholder-transparent"
                            placeholder="Enter your new password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        disabled={isDisabled || loading}
                        type="submit"
                        className={`w-full py-3 rounded-lg font-semibold text-white transition duration-200 ${isDisabled
                            ? 'bg-slate-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                            }`}
                        onClick={onSubmit}
                    >
                        Send Email
                    </button>
                </form>

                {/* Back Link */}
                <Link
                    href="/login"
                    className="text-[#8129D9] hover:underline font-bold mt-8"
                >
                    Back to log in
                </Link>

                {/* Disclaimer */}
                <div className="mt-20 text-center">
                    <p className="text-[10px] text-gray-400 max-w-[280px] leading-tight">
                        This site is protected by reCAPTCHA and the <Link href="#" className="underline">Google Privacy Policy</Link> and <Link href="#" className="underline">Terms of Service</Link> apply.
                    </p>
                </div>
            </div>
        </div>
    );
}