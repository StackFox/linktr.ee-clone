import connect from "@/lib/dbConfig"
import User from "@/app/models/UserModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

await connect()

export async function POST(request, response) {
    
    try {
        const reqBody = await request.json()
        console.log(reqBody)
        const { username, email, password } = reqBody

        console.log(reqBody);

        // check if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        console.log(hashedPassword)
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}