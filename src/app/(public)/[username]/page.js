import User from "@/app/models/UserModel";
import connectionToDB from "@/lib/dbConfig";


export default async function LinkPage({ params }) {
    const { username } = await params
    await connectionToDB();
    const user = await User.findOne({ username });

    if (!user) {
        return <div className="p-4 text-center">User not found</div>
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold">
                    {user.username[0].toUpperCase()}
                </div>
                <h1 className="font-bold text-xl text-white">@{user.username}</h1>

                <div className="w-full space-y-4 mt-6">
                    {user.links && user.links.map((link) => (
                        <a
                            key={link._id || link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 p-4 rounded-xl text-center block hover:scale-105 transition-transform border border-gray-200"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
