import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Jwt } from 'src/auth/infraestructure/out/jwt/jwt';
import { TokenPayload } from 'src/shared/@types/jwt';

interface RequestWithUser extends Request {
  user?: TokenPayload;
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly jwtService: Jwt) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = this.jwtService.verifyAccesToken(token);
      request.user = { email: payload.email, sub: payload.sub as string };
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authHeader = request.headers.authorization;

    if (!authHeader) return undefined;

    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
