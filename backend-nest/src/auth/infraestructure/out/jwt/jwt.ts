import jwt, { SignOptions } from 'jsonwebtoken';
import { JwtProvider } from 'src/auth/application/port/out/jwt.provider';
import { TokenPayload, AuthTokens, DecodedToken } from 'src/shared/@types/jwt';
import type { StringValue } from 'ms';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Jwt extends JwtProvider {
  private readonly ACCESS_TOKEN_SECRET: string;
  private readonly REFRESH_TOKEN_SECRET: string;
  private readonly ACCESS_TOKEN_EXPIRES: string;
  private readonly REFRESH_TOKEN_EXPIRES: string;

  constructor() {
    super();

    if (
      process.env.REFRESH_TOKEN_SECRET == undefined ||
      process.env.REFRESH_TOKEN_SECRET == undefined
    ) {
      throw new Error('');
    }
    this.ACCESS_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
    this.REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
    this.ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES ?? '15m';
    this.REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES ?? '15m';
  }

  generateTokens(payload: TokenPayload): AuthTokens {
    const accessOptions: SignOptions = {
      expiresIn: this.ACCESS_TOKEN_EXPIRES as StringValue,
    };

    const refreshOptions: SignOptions = {
      expiresIn: this.REFRESH_TOKEN_EXPIRES as StringValue,
    };

    const accessToken = jwt.sign(
      payload,
      this.ACCESS_TOKEN_SECRET,
      accessOptions,
    );
    const refreshToken = jwt.sign(
      payload,
      this.REFRESH_TOKEN_EXPIRES,
      refreshOptions,
    );

    return { accessToken, refreshToken };
  }
  verifyAccesToken(token: string): DecodedToken {
    return jwt.verify(token, this.ACCESS_TOKEN_SECRET) as DecodedToken;
  }
}
