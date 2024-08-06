import { User } from '@/model/user.model';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs'


export async function mailerSender(email: string, mailType: string, userId:string) {
   try {
    const transporter  = nodemailer.createTransport(
        {
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASS,
            }
        }
    )

    const hashedToken = await bcryptjs.hash(userId.toString(), 8)

    if (mailType=="VERIFY") {
        await User.findByIdAndUpdate(
            userId, 
            {
                verifyToken: hashedToken, 
                verifyTokenExpiry: Date.now() + (60 * 60 * 24 * 30)
            }
        )
    }
    else if (mailType==="RESET") {
        await User.findByIdAndUpdate(
            userId, 
            {
                ForgetPasswordToken: hashedToken, 
                ForgetPasswordTokenExpiry: Date.now() + (60 * 60 * 24)
            }
        )
    }
    await transporter.sendMail(
        {
            from: '"Daani\'Tipad👻" <tipad77389@almaxen.com>',
            to: email,
            subject: mailType === "VERIFY" ? "Verify your account for Daani\'Tipad platform" : "Reset your password for Tipad",
            html: `
            
                <h1>${mailType === 'VERIFY' ? 'Verify Your Account' : 'Reset Your Password'}</h1>
                <p>${mailType === 'VERIFY' ? `Thank you for registering with Daani'Tipad. Please verify your account by clicking the link: <a href="${process.env.DOMAIN}/verify-email?token=${hashedToken}">Verify Account</a>` : `We received a request to reset your password. Please click the link to reset your password: <a href="${process.env.DOMAIN}/reset-password?token=${hashedToken}">Reset Password</a>`}</p>`,
        }
    )
   } catch (error:any) {
    return Response.json({message: error.message, status: 404})
   }
}