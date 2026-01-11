import connect from "@/lib/dbConfig"
import User from "@/app/models/UserModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { username, password } = reqBody;

        // check if user exists
        const user = await User.findOne({ username })        

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }

        // check if the password is correct
        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ error: "invalid password" }, { status: 400 })
        }

        // Create token data 
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // create token
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
            username: user.username
        })
        response.cookies.set("token", token, { httpOnly: true })

        return response;

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}