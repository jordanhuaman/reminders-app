import type {
  AuthTokens,
  DecodedToken,
  TokenPayload,
} from 'src/shared/@types/jwt';

export abstract class JwtProvider {
  abstract generateTokens(payload: TokenPayload): AuthTokens;
  abstract verifyAccesToken(token: string): DecodedToken;
}
