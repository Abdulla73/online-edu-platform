import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; 
import { AuthService } from 'src/login/login.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]; 
    console.log("Received token:", token); // Log the received token
    if (token) {
      const { role } = await this.authService.decodeToken(token); // Decode only the role
      console.log("Decoded user role:", role); // Log the decoded user role
      if (role) {
        req['userRole'] = role; // Attach the role to the request
      }
    }
    next();
  }  
}
