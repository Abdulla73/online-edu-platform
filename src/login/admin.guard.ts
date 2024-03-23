import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userRole = request.userRole; // Retrieve the user role directly from the request

    if (!userRole) {
      console.log("User role not found");
      return false; // Deny access if user role is missing
    }

    if (userRole !== 'admin') {
      console.log("User is not an admin. Role:", userRole);
      return false; // Deny access if user is not an admin
    }

    console.log("User is an admin. Role:", userRole);
    return true; // Allow access if user is an admin
  }
}
