import { Request } from 'express';
import { TokenPayload } from './jwt';

interface RequestWithUser extends Request {
  user?: TokenPayload;
}
