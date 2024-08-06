import { User } from "@/model/user.model";
import { databaseConnection } from "@/dbconfig/connection.dbconfig";
import { mailerSender } from "@/lib/mailSender";
import { NextRequest, NextResponse } from "next/server";

databaseConnection();

export async function POST(request:NextRequest) {
    try {
        const {email} = await request.json();
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "User does not exists"})
        }
        mailerSender(email, "RESET", user._id);
        return NextResponse.json({message: "Reset Link sent to email successfully", status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message, status: 400})
    }
}