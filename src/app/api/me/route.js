import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import User from "@/app/models/UserModel";
import connectionToDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";
connectionToDB()

export async function GET(request) {
    try {
        const decodedToken = getDataFromToken(request)
        const userId = decodedToken.id;
        const user = await User.findOne({ _id: userId })
        return NextResponse.json({message: 'User found', data: user})
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}