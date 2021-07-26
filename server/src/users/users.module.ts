import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Dictionary } from 'src/dictionary/dictionary.model';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    SequelizeModule.forFeature([User, Dictionary])
  ],
  exports: [UsersService]
})
export class UsersModule {}
