import {
  HttpException,
  HttpStatus,
  Inject,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Jwt } from '../../out/jwt/jwt';

export class LoggerMiddleware implements NestMiddleware {
  constructor(
    @Inject()
    private readonly jwtProvider: Jwt,
  ) {}

  use(req: Request, _res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    console.log('⭐⭐ ' + token);

    if (token === undefined) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const validation = this.jwtProvider.verifyAccesToken(token);

    if (validation === undefined) {
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    }

    next();
  }
}
