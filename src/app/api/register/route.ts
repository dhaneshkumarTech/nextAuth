// post request
// data from user/body
// save in user model
// nodemailer function with email, emailType, and userId

import { User } from "@/model/user.model";
import { databaseConnection } from "@/dbconfig/connection.dbconfig";
import { mailerSender } from "@/lib/mailSender";
import { NextRequest, NextResponse } from "next/server";


databaseConnection();
export async function POST(request: NextRequest) {
    try {
        const {fullName, username, email, password}= await request.json();

        const user = await User.findOne({email: email});
        if (user) {
            return NextResponse.json({error: "email already exists.", status: 400})
        }
        const newUser = await User.create({fullName, username, email, password})
        console.log("new user ",newUser);
          
    mailerSender(email, "VERIFY", newUser._id)
    return NextResponse.json({user: newUser, status: 200, message: "Verification Email Sent sucessfully"})  

        
    } catch (error) {
       return NextResponse.json("Bad Request", {status: 400})
    }
}   
