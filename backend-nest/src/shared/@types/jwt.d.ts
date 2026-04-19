export interface TokenPayload {
  email: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface DecodedToken extends JwtPayload, TokenPayload {}
