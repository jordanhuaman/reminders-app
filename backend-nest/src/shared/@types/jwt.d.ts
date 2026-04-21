import { JwtPayload } from 'jsonwebtoken';

export interface TokenPayload {
  sub: string;
  email: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface DecodedToken extends JwtPayload, TokenPayload {}
