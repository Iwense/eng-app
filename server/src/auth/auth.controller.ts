import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('/auth')
export class AuthController {

    constructor(private authService: AuthService){

    }

    @Post('/login')
    login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/help')
    help(@Req() req){
        console.log("req = ", req)
        return "<h1> Adsad</h1>"
    }

}
