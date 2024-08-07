import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { User } from "@/model/user.model";
import { databaseConnection } from "@/dbconfig/connection.dbconfig";

interface JwtPayload {
    username: string;
    _id: string;
  }

databaseConnection();
export async function GET(request:NextRequest) {
    try {
        const jwtToken = cookies().get('token');
        const decode = jwt.verify(jwtToken!.value, process.env.JWT_SECRET!) as JwtPayload;

        if(!decode){
            return NextResponse.json({error: "JWT does not verified or User does not exist.", status:404})
        }
        const user = await User.findOne({_id: decode._id})
        if (!user) {
            return NextResponse.json({ error: "User not found", status: 404 });
        }

        return NextResponse.json({
            message: "User authenticated successfully",
            user: {
                name: user.fullName,
                username: user.username,
                email: user.email,
                isVerified: user.isVerified,
            },
            status: 200
        });
        
    }catch (error:any) {    
        return NextResponse.json({error: error.message, status: 400})
    }

}