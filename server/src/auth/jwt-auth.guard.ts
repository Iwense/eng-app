import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  handleRequest(err, user, info, context) {
   
    this.logger.log(err, 'error');
    this.logger.log(user, 'user');
    console.log("user = ", user)
    this.logger.log(info, 'info');
    this.logger.log(context, 'context');

    if (err || !user) {
      this.logger.error(`JWT Authentication error: ${err}`);
      throw err || new UnauthorizedException();
    }

    return user;
  }
      
}
