"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useEffect, useState, useRef } from "react"
import {
    BsThreeDotsVertical,
    BsInstagram,
    BsWhatsapp,
    BsGlobe
} from "react-icons/bs";
import {
    HiOutlinePencil,
    HiOutlineTrash,
    HiOutlinePhotograph,
    HiOutlineStar,
    HiOutlineLockClosed,
    HiOutlineChartBar
} from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { FiShare, FiSettings } from "react-icons/fi";
import { FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function AdminPage() {
    const router = useRouter();

    const [data, setData] = useState('');
    const [linkData, setLinkData] = useState([{ id: 1, title: 'Title', url: 'Url' }]);
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await axios.get('/api/me')
                setData(response.data.data)
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        getUserDetails();
    }, [])

    const handleAddLink = () => {
        setLinkData((prev) => [...prev, { id: Date.now(), title: 'Title', url: 'Url' }]);
    }

    const handleDeleteLink = (id) => {
        setLinkData((prev) => prev.filter(item => item.id !== id));
    }

    const handleUpdateLink = (id, field, value) => {
        setLinkData((prev) => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
    }

    const onDragStart = (e, index) => {
        setDraggedItemIndex(index);
        e.dataTransfer.effectAllowed = "move";
        // Ghost image customization could go here
    }

    const onDragOver = (e) => {
        e.preventDefault(); // Necessary to allow dropping
    }

    const onDrop = (e, dropIndex) => {
        e.preventDefault();
        if (draggedItemIndex === null || draggedItemIndex === dropIndex) return;

        const updatedLinks = [...linkData];
        const [movedItem] = updatedLinks.splice(draggedItemIndex, 1);
        updatedLinks.splice(dropIndex, 0, movedItem);

        setLinkData(updatedLinks);
        setDraggedItemIndex(null);
    }

    return (
        <div className="flex w-full min-h-screen font-sans">
            {/* Center Content */}
            <div className="flex-1 px-4 sm:px-8 py-6 max-w-4xl mx-auto pb-20">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Links</h1>
                    <div className="flex gap-2">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                            <FiSettings size={20} />
                        </button>
                    </div>
                </header>

                {/* Profile Section */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
                    <div className="flex items-start gap-4 z-10 relative">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 text-2xl font-bold">
                            {data?.username && data.username[0]?.toUpperCase()}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h2 className="font-bold text-lg text-gray-900">@{data.username}</h2>
                            </div>
                            <div className="flex gap-3 mt-2 text-gray-400">
                                <BsInstagram size={18} className="hover:text-pink-600 transition-colors cursor-pointer" />
                                <FaTiktok size={18} className="hover:text-black transition-colors cursor-pointer" />
                                <FaYoutube size={18} className="hover:text-red-600 transition-colors cursor-pointer" />
                                <FaEnvelope size={18} className="hover:text-blue-600 transition-colors cursor-pointer" />
                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                                    <GoPlus size={14} className="text-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Action Buttons */}
                <button onClick={handleAddLink} className="w-full bg-[#8129D9] hover:bg-[#6821ad] text-white font-bold py-3.5 rounded-[30px] flex items-center justify-center gap-2 transition-transform transform active:scale-[0.99] mb-6 shadow-md hover:shadow-lg">
                    <GoPlus size={24} />
                    <span className="text-[16px]">Add</span>
                </button>


                <div className="flex justify-between items-center mb-6 px-1">
                    <button onClick={handleAddLink} className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors border border-gray-200 bg-white">
                        <GoPlus /> Add collection
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                        <HiOutlineTrash /> View archive {'>'}
                    </button>
                </div>

                {/* Link Items List */}
                <div className="space-y-4">
                    {linkData && linkData.map((item, index) => (
                        <LinkItem
                            key={item.id}
                            index={index}
                            id={item.id}
                            title={item.title}
                            url={item.url}
                            clicks={0}
                            active={true}
                            onUpdate={handleUpdateLink}
                            onDelete={handleDeleteLink}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                        />
                    ))}
                </div>
            </div>

            {/* Right Preview Sidebar */}
            <div className="w-[420px] border-l border-gray-200 bg-white hidden xl:flex flex-col items-center p-8 sticky top-0 h-screen">
                <div className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 flex justify-between items-center mb-10 text-sm shadow-sm hover:bg-gray-50 transition-colors cursor-pointer group hover:shadow-md">
                    <span className="text-gray-700 truncate group-hover:underline decoration-1 underline-offset-2">linktr.ee/{data.username}</span>
                    <FiShare className="text-gray-500" />
                </div>

                {/* Mobile Mockup */}
                <div className="w-[300px] h-[600px] border-[12px] border-gray-900 rounded-[3rem] overflow-hidden relative bg-gray-900 shadow-2xl ring-1 ring-gray-900/10">
                    <div className="w-full h-6 bg-transparent absolute top-0 left-0 z-20 flex justify-between px-6 items-center pt-2">
                        <span className="text-[10px] text-white font-medium">9:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                            <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                        </div>
                    </div>

                    <div className="w-full h-full bg-gradient-to-b from-[#2e1d40] via-[#593d7c] to-[#2e1d40] text-white p-6 flex flex-col items-center pt-14 overflow-y-auto no-scrollbar">
                        <div className="absolute top-12 right-6 w-8 h-8 bg-white/10 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                            <span className="text-white text-xs">•••</span>
                        </div>

                        <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 border-2 border-white/20 flex items-center justify-center text-gray-800 font-bold text-xl">
                            {data?.username && data.username[0]?.toUpperCase()}
                        </div>

                        <h3 className="font-bold text-lg mb-6 drop-shadow-md">@{data.username}</h3>

                        <div className="w-full space-y-3 z-10">
                             {linkData && linkData.map((item) => (
                                <MockPhoneButton key={item.id}>{item.title}</MockPhoneButton>
                             ))}
                        </div>

                        <div className="mt-auto text-[10px] text-white/50 pb-4 font-semibold uppercase tracking-widest">Linktree</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LinkItem({ id, index, title, url, clicks, active, icon, warning, onUpdate, onDelete, onDragStart, onDragOver, onDrop }) {
    return (
        <div 
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
            className={`bg-white rounded-2xl border-2 ${warning ? 'border-yellow-200' : 'border-white'} shadow-sm hover:shadow-md transition-all group cursor-default`}
        >
            <div className="p-4 flex gap-4">
                <div className="cursor-move text-gray-300 flex items-center hover:text-gray-600">
                    <BsThreeDotsVertical size={20} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex items-center gap-2 group/edit">
                                <input 
                                    type="text" 
                                    value={title} 
                                    onChange={(e) => onUpdate(id, 'title', e.target.value)}
                                    className="font-bold text-gray-900 text-[15px] focus:outline-none focus:border-b border-gray-300 bg-transparent w-full max-w-[200px]" 
                                />
                                <HiOutlinePencil size={14} className="text-gray-300 group-hover/edit:text-gray-500 cursor-pointer" />
                            </div>
                            <div className="flex items-center gap-2 group/edit">
                                <input 
                                    type="text" 
                                    value={url}
                                    onChange={(e) => onUpdate(id, 'url', e.target.value)}
                                    className="text-gray-500 text-sm focus:outline-none focus:border-b border-gray-300 bg-transparent w-full max-w-[200px]" 
                                />
                                <HiOutlinePencil size={14} className="text-gray-300 group-hover/edit:text-gray-500 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-gray-400 hover:text-black transition-colors"><FiShare /></button>
                            <div className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${active ? 'bg-[#43E660]' : 'bg-gray-300'}`}>
                                <div className={`w-3.5 h-3.5 bg-white rounded-full absolute top-1.5 transition-all shadow-sm ${active ? 'left-5' : 'left-1'}`}></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4 text-gray-400">
                        {icon && <span className="text-gray-600">{icon}</span>}
                        <button className="hover:text-gray-600 transition-colors"><HiOutlinePhotograph size={18} /></button>
                        <button className="hover:text-gray-600 transition-colors"><HiOutlineStar size={18} /></button>
                        <button className="hover:text-gray-600 transition-colors"><HiOutlineLockClosed size={18} /></button>
                        <button className="flex items-center gap-1 hover:text-gray-600 transition-colors"><HiOutlineChartBar size={18} /> <span className="text-xs">{clicks} clicks</span></button>
                        <button onClick={() => onDelete(id)} className="ml-auto hover:text-red-500 transition-colors"><HiOutlineTrash size={18} /></button>
                    </div>
                </div>
            </div>
            {warning && (
                <div className="bg-[#FFF9C4] px-4 py-3 rounded-b-xl border-t border-yellow-100 flex items-center gap-3">
                    <span className="text-yellow-600 text-xs text-lg">ⓘ</span>
                    <span className="text-xs text-gray-800 font-medium">{warning}</span>
                </div>
            )}
        </div>
    )
}

function MockPhoneButton({ children, icon }) {
    return (
        <div className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3.5 px-4 rounded-full text-sm text-center transition-all cursor-pointer flex items-center justify-center gap-3 border border-white/10 shadow-lg group">
            {icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
            {children}
        </div>
    )
}
