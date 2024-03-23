import { AuthService } from 'src/login/login.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'c07422b74285bfc0fb7ebe9a11686f2aa9f14e90a0fb03ae9a33b8bc1e06771e', // Replace with your actual JWT secret
    });
  }

  async validate(payload: any) {
    const decodedToken = await this.authService.decodeToken(payload);
    if (!decodedToken) {
      throw new UnauthorizedException();
    }
    return decodedToken;
  }
}
