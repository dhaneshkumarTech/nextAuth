import { User } from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import createToken from '@/lib/createToken'
import { cookies } from 'next/headers'
import { databaseConnection } from "@/dbconfig/connection.dbconfig";

databaseConnection();

export async function POST(request:NextRequest) {
    try {
        const {email, password} = await request.json();

        const user = await User.findOne({email:email});

        if(!user){
            return NextResponse.json({error: "User does not exists", success: false})
        }
        
        else if (!(await bcryptjs.compare(password, user.password))) {
           return NextResponse.json({error: "password is incorrrect", status: 404})
        }
        
        const token = createToken.JWTtoken(user.username, user._id);
        cookies().set("token", token, { httpOnly: true } );

        return NextResponse.json({succes: "user login successfully", token: token, status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:400})
    }
}