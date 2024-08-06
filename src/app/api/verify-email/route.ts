import { User } from "@/model/user.model";
import { databaseConnection } from "@/dbconfig/connection.dbconfig";
import { NextRequest, NextResponse } from "next/server";

databaseConnection();
export async function POST(request:NextRequest) {
    try {
        const {token} = await request.json();
        const user = await User.findOne({verifyToken: token, verifyTokenExpiry : { $gt: Date.now()}})
        
        if(!user){
            return NextResponse.json({error: "Link Expired! Sign up again to verify your email."})
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        
        await user.save();
        return Response.json({message: "Your account is verified.", status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:400})
    }

}