import { HttpStatus } from '@nestjs/common';
import { ApplicationError } from 'src/shared/errors/application.error';

type HttpErrorResponse = {
  status: number;
  body: {
    code: string;
    message: string;
    details?: unknown;
  };
};

const errorCodeToStatus: Record<string, number> = {
  AUTH_INVALID_CREDENTIALS: HttpStatus.UNAUTHORIZED,
  USER_EMAIL_ALREADY_EXISTS: HttpStatus.CONFLICT,
  TODO_NOT_FOUND: HttpStatus.NOT_FOUND,
  VALIDATION_FAILED: HttpStatus.BAD_REQUEST,
};

export const mapApplicationErrorToHttp = (
  error: ApplicationError,
): HttpErrorResponse => {
  const status = errorCodeToStatus[error.code] ?? HttpStatus.BAD_REQUEST;

  return {
    status,
    body: {
      code: error.code,
      message: error.message,
      details: error.details,
    },
  };
};
