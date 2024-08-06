import  mongoose, {Schema,Document, model,models, mongo} from "mongoose";
import bcryptjs from 'bcryptjs'


interface User extends Document{
    fullName: string;
    username: string;
    email: string;
    password: string;
    verifyToken: string;
    verifyTokenExpiry: Date;
    ForgetPasswordToken: string;
    ForgetPasswordTokenExpiry: Date;
    isVerified: boolean;
}

const userSchema = new Schema<User>(
    {
        fullName:
        {
            type: String,
            required: [true, "username is required"],
        },
        username:
            {
                type: String,
                required: [true, "username is required"],
                unique: true,
            },
        email:
            {
                type: String,
                required: [true, "email is required"],
                unique: true,
                match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"please provide valid email"]
            },  
        password:
            {
                type: String,
                required: [true, "password is required"],
            },
        verifyToken:
            {
                type: String,
            },
        verifyTokenExpiry:
            {
                type: Date,
            },
        ForgetPasswordToken:
            {
                type: String,
            },
        ForgetPasswordTokenExpiry:
            {
                type: Date,
            },
        isVerified:
            {
                type: Boolean,
                default: false
            }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
       return next();
    }
    this.password = await bcryptjs.hash(this.password,10);
    next();
})


export const User = models.User || model<User>("User", userSchema);
