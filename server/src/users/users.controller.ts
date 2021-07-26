import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){

    }

    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUser(@Req() req){
        console.log("getUser users.controller -> request = ", req)
        return this.usersService.getUser()
    }

}
