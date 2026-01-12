"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { HiDotsHorizontal } from "react-icons/hi";


export default function AccountPage() {
    const router = useRouter()

    const [data, setData] = useState('');

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await axios.get('/api/me')
                setData(response.data.data)
                
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        getUserDetails();
    }, [])

    const username = data?.username || "Loading...";

    const handleDelete = async () => {
        try {
            const response = await axios.delete('/api/users/delete', { data: data })
            toast.success(response.message)
            router.push('/login')

        } catch (error) {
            console.error("Error:", error)
            toast.error(error.message)
        }
    }

    const handleLogout = async () => {
        try {
            const response = await axios.get('/api/users/logout')
            toast.success(response.message)
            router.push('/login')

        } catch (error) {
            console.error("Error:", error)
            toast.error(error.message)
        }
    }



    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-8 font-sans">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Account</h1>

            <section className="mb-12">
                <h2 className="text-md font-semibold text-gray-900 mb-4">Linktrees you own</h2>

                <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header with User */}
                    <div className="p-6 flex items-start justify-between border-b border-gray-100 pb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">@{username}</span>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            <HiDotsHorizontal size={24} />
                        </button>
                    </div>

                    {/* Plan Section */}
                    <div className="px-6 py-6 border-b border-gray-100">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">Plan</h3>
                        <p className="text-sm text-gray-600">Free</p>
                    </div>

                    {/* Upgrade Section */}
                    <div className="p-6">
                        <button onClick={handleLogout} className="w-full bg-[#8129D9] hover:bg-[#6821ad] text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
                            Log out
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-md font-semibold text-gray-900 mb-2">Manage account deletion</h2>
                <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 p-6">
                    <p className="text-sm text-gray-600 mb-6">Permanently delete your entire account and all profiles you own.</p>
                    <button onClick={handleDelete} className="w-full bg-[#D10000] hover:bg-[#b50000] text-white font-bold py-3 rounded-full transition-colors">
                        Delete Account
                    </button>
                </div>
            </section>
        </div>
    )
}
