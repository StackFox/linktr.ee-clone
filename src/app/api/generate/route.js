import User from "@/app/models/UserModel";
import connectionToDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectionToDB();

        console.log('connected to db')
        return NextResponse.json({
            success: true,
            error: false,
            message: 'URL saved to the database successfully'
        }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { success: false, error: true, message: 'Failed to save URL' },
            { status: 500 }
        );
    }
}