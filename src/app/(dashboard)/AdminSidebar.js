"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    HiOutlineTemplate,
    HiOutlineLink,
    HiOutlineShoppingBag,
    HiOutlineCurrencyDollar,
    HiOutlineUsers,
    HiOutlineChartBar,
    HiOutlineCalendar,
    HiOutlineSpeakerphone,
    HiOutlinePhotograph
} from "react-icons/hi";
import { MdOutlineAutoGraph, MdOutlinePostAdd } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function AdminSidebar() {
    const router = useRouter()
    const [data, setData] = useState(null);

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

    return (
        <aside className="w-[260px] bg-white border-r border-[#e0e2d9] flex-shrink-0 flex flex-col h-full font-sans overflow-y-auto hide-scrollbar z-20">
            {/* User / Logo Section */}
            <div className="p-4">
                <button onClick={() => {router.push('/admin/account')}} className="flex items-center justify-between w-full hover:bg-gray-50 p-2 rounded-xl transition-colors text-left group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-gray-400">
                            <HiOutlineUsers size={16} />
                        </div>
                        <span className="font-semibold text-sm text-gray-700 group-hover:text-black truncate max-w-[140px]">{username}</span>
                    </div>
                </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1 px-3 mt-2">
                <div className="px-3 py-1 flex items-center justify-between group cursor-pointer hover:bg-gray-50 rounded-lg">
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-900">My Linktree</span>
                    <span className="text-gray-400">^</span>
                </div>

                <SidebarLink href="/admin" icon={<HiOutlineLink size={20} />} label="Links" active />
                <SidebarLink href="#" icon={<HiOutlineShoppingBag size={20} />} label="Shop" />
                <SidebarLink href="#" icon={<HiOutlineTemplate size={20} />} label="Design" />
                <SidebarLink href="#" icon={<HiOutlineCurrencyDollar size={20} />} label="Earn" />
                <SidebarLink href="#" icon={<HiOutlineUsers size={20} />} label="Audience" />
                <SidebarLink href="#" icon={<HiOutlineChartBar size={20} />} label="Insights" />
            </div>

            <div className="flex flex-col gap-1 px-3 mt-6">
                <div className="px-3 py-1 mb-1">
                    <span className="text-xs font-semibold text-gray-500">Tools</span>
                </div>

                <SidebarLink href="#" icon={<HiOutlineCalendar size={20} />} label="Social planner" />
                <SidebarLink href="#" icon={<HiOutlineSpeakerphone size={20} />} label="Instagram auto-reply" />
                <SidebarLink href="#" icon={<IoShareSocialOutline size={20} />} label="Link shortener" />
                <SidebarLink href="#" icon={<MdOutlinePostAdd size={20} />} label="Post Ideas" />
            </div>
        </aside>
    );
}

function SidebarLink({ href, icon, label, active }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${active
                ? "bg-[#f3f3f1] text-black font-semibold"
                : "text-gray-600 hover:bg-[#f5f7f2] hover:text-black"
                }`}
        >
            <span className={active ? "text-gray-900" : "text-gray-500"}>{icon}</span>
            {label}
        </Link>
    );
}
