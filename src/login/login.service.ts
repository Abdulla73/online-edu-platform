import { RegistrationService } from './../registration/registration.service';
import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private readonly RegistrationService: RegistrationService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.RegistrationService.findOne(email);
    if (user && await compare(password, user.user_password)) {
      const { user_password, ...result } = user; 
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      id: user.id, 
      user_mail: user.user_email, 
      user_id: user.user_id,
      role: user.role // Include the 'role' field in the payload
    }; 
    console.log("Token payload:", payload); // Log the payload
    const accessToken = this.jwtService.sign(payload); 
    return { 
      accessToken, 
      user_email: user.user_email, 
      user_id: user.user_id 
    }; 
}


  async decodeToken(token: string): Promise<{ email: string, id: number, user_mail: string, user_id: number, role: string } | null> {
    try {
      const payload = this.jwtService.verify(token); 
      return { email: payload.email, id: payload.id, user_mail: payload.user_mail, user_id: payload.user_id, role: payload.role }; // Include 'role' property
    } catch (error) {
      return null; 
    }
  }
  

}