import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';


import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    UsersModule, 
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register({secret: process.env.PRIVATE_KEY || "SECRET", signOptions: {expiresIn: '24h'}}),
  ]
})
export class AuthModule {}
