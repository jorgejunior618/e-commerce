import { NextFunction, Request, Response, Router } from 'express';
import JWT from 'jsonwebtoken';
import { createHash } from 'crypto';
import getHash from '../../utils/sha1Encoder';

const sessionRoutes = Router();
const SESSION_URL = '/session';


sessionRoutes.post(SESSION_URL + '/login', async (
  request: Request<{}, User>
  , response: Response
  , next: NextFunction
) => {
  try {
    const { email, password } = request.body;

    const hashPassword = getHash(password);

  } catch (error) {
    next(error);
  }
});

sessionRoutes.post(SESSION_URL + '/register', async (
  request: Request
  , response: Response
  , next: NextFunction
) => {
  try {
    
  } catch (error) {
    next(error);
  }
});

export default sessionRoutes;
