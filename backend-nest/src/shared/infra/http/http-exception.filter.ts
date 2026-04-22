import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { ApplicationError } from 'src/shared/errors/application.error';
import { mapApplicationErrorToHttp } from './error-to-http';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof ApplicationError) {
      const mapped = mapApplicationErrorToHttp(exception);
      response.status(mapped.status).json(mapped.body);
      return;
    }

    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json(exception.getResponse());
      return;
    }

    this.logger.error('Unhandled exception', exception as Error);
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error',
    });
  }
}
