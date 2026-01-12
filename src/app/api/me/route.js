import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import User from "@/app/models/UserModel";
import connectionToDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";

export async function GET(request) { // request coming as cookies from the user's browser
    try {
        await connectionToDB();
        const decodedToken = getDataFromToken(request)
        const userId = decodedToken.id;
        const user = await User.findOne({ _id: userId })
        return NextResponse.json({ message: 'User found', data: user })
    } catch (error) {
        console.error("Error in /api/me:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}