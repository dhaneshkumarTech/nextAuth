import { databaseConnection } from "@/dbconfig/connection.dbconfig";
import { User } from "@/model/user.model";
import { NextRequest,NextResponse } from "next/server";

databaseConnection();
export async function POST(request: NextRequest) {
    try {
        const {token, password} = await request.json();
        const user = await User.findOne({ForgetPasswordToken: token});
        if(!user){
            return NextResponse.json({error: "Invalid token or User does not exist.", status:404})
        }
        console.log("user: ", user)
        const expirytime = await User.find({ForgetPasswordTokenExpiry : { $gt: Date.now()}})
        console.log("expiry", expirytime);
        if(!expirytime){
            return NextResponse.json({error: "Link Expired! Forget again to get new reset link.", status:400})
        }
        user.password = password;
        user.ForgetPasswordToken = undefined;
        user.ForgetPasswordTokenExpiry =undefined;
        await user.save();
        return NextResponse.json({message: "Your password updated successfully.", status:200})
    } catch (error:any) {
        return NextResponse.json({error: error.message, status:400})
    }
}