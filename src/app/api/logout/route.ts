import { databaseConnection } from "@/dbconfig/connection.dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

databaseConnection();
export async function POST(request:NextRequest) {
        try {

            cookies().set("token", "", 
                { 
                    httpOnly: true, 
                    expires: new Date(0)
                } 
            )
            return NextResponse.json(
                {
                    message:"Logout Succefully",
                     success: true
                }
            )
        } catch (error:any) {
        return NextResponse.json({error: error.message, status: 400})
        }
}

