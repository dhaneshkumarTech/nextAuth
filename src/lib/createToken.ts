import jwt from 'jsonwebtoken'

const JWTtoken =  (username:string, userId:string) => {
    const JWTOptions = {
        username: username,
        _id: userId      
    }
    return (
        jwt.sign(
            JWTOptions,
            process.env.JWT_SECRET!,
            {expiresIn: process.env.JWT_EXPIRY}
        )
    )   
}

export default{JWTtoken}

