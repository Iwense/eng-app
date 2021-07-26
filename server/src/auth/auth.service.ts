import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService ){

    }

    async login(userDto: CreateUserDto){
        const user:User = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto){
        const condidate = await this.userService.getUserByEmail(userDto.email)
        if(condidate){
            throw new HttpException('Пользователь с таким email существует', HttpStatus.FOUND)
        }
        
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }
    

    private async generateToken(user : User){
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto){
        const user:User = await this.userService.getUserByEmail(userDto.email)
        if(!user){
            throw new UnauthorizedException({message: 'Пользователя с таким email не существует!'})
        }

        const passEquals = await bcrypt.compare(userDto.password, user.password)
        if(!passEquals){
            throw new UnauthorizedException({message: 'Вы ввели не верный пароль'})
        }
        return user;
    }

}
