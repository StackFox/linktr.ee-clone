import connect from "@/lib/dbConfig"
import User from "@/app/models/UserModel"
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

export async function POST(request) {
    try {
        // Connect to database
        await connect()
        
        const reqBody = await request.json()
        const { email, password } = reqBody

        // Validate input
        if (!email || !password) {
            return NextResponse.json({ 
                error: "Email and password are required" 
            }, { status: 400 })
        }

        // Check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ 
                error: "No account found with this email address" 
            }, { status: 404 })
        }

        // Hash new password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Update user's password in database
        await User.findByIdAndUpdate(user._id, {
            password: hashedPassword
        })

        return NextResponse.json({
            message: "Password updated successfully",
            success: true
        }, { status: 200 })

    } catch (error) {
        console.error("Error in forgot password route:", error)
        return NextResponse.json({ 
            error: error.message || "Failed to update password" 
        }, { status: 500 })
    }
}