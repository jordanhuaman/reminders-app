import { ApplicationError } from 'src/shared/errors/application.error';

export class AuthInvalidCredentialsError extends ApplicationError {
  constructor() {
    super('AUTH_INVALID_CREDENTIALS', 'Invalid credentials');
    this.name = 'AuthInvalidCredentialsError';
  }
}

export class UserEmailAlreadyExistsError extends ApplicationError {
  constructor() {
    super('USER_EMAIL_ALREADY_EXISTS', 'User email already exists');
    this.name = 'UserEmailAlreadyExistsError';
  }
}
