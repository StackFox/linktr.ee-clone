import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import User from "@/app/models/UserModel";
import connectionToDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectionToDB();
        const reqBody = await request.json();
        
        const userId = getDataFromToken(request).id;
        
        // Update user's links
        // We replace the entire links array with the new one from frontend
        await User.findByIdAndUpdate(userId, {
            $set: { links: reqBody }
        });
        
        return NextResponse.json({
            success: true,
            error: false,
            message: 'Links saved successfully'
        }, { status: 201 });
    } catch (err) {
        console.error("Error saving links:", err);
        return NextResponse.json(
            { success: false, error: true, message: err.message },
            { status: 500 }
        );
    }
}