import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; 
import { AuthService } from 'src/login/login.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]; 
    if (token) {
      const user = await this.authService.decodeToken(token);
      if (user) {
        req['user'] = user; 
      }
    }
    next();
  }

}
