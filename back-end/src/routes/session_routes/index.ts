import { NextFunction, Request, Response, Router } from 'express';

const sessionRoutes = Router();
const SESSION_URL = '/session';

sessionRoutes.post(SESSION_URL + '/login', async (
  request: Request
  , response: Response
  , next: NextFunction
) => {
  try {
    
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
