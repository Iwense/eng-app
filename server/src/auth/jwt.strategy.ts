import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor( private userService: UsersService){
        super({
            jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
            ignoreExpiration: false,
            secretOrKey: process.env.PRIVATE_KEY,
        })
    }

    async validate(payload: any){
        console.log("JWT.STRATEGY -> PAYLOAD_VALIDATE =", payload)
        // const user = await this.userService.getUserByEmail(payload.email)
        return {userId : 1}
    }
}