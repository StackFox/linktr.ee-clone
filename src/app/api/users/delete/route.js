import User from '@/app/models/UserModel';
import connectionToDB from '@/lib/dbConfig'
import { NextResponse } from 'next/server'
import { getDataFromToken } from '@/app/helpers/getDataFromToken';

connectionToDB()

export async function DELETE(request) {

    try {
        const userId = getDataFromToken(request);
        const response = NextResponse.json({ message: `Account deleted`, success: true }, { status: 200 });
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
        await User.deleteOne({ _id: userId.id })
        return response;
    } catch (error) {
        return NextResponse.json({ message: 'Unable to delete account', error: error.message })
    }
}