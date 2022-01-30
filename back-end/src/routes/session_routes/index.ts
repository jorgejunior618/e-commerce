import { NextFunction, Request, Response, Router } from 'express';
import JWT from 'jsonwebtoken';
import { User, UpdateUser } from '../../models/User';
import getHash from '../../utils/sha1Encoder';
import sessionRepository from '../../repositories/SessionRepository';
import jwtAuthenticationMiddleware from '../../middlewares/jwtAuthenticationMiddleware';
import ForbidenError from '../../models/Errors/ForbidenError';

const sessionRoutes = Router();


sessionRoutes.post('/session/login', async (
  request: Request<{}, User>
  , response: Response
  , next: NextFunction
) => {
  try {
    const { email, password } = request.body;
    const hashPassword = getHash(password);
    const { user } = await sessionRepository.validateLogin(email, hashPassword);

    const jwtPayload = {
      name: user.name,
      email: user.email,
    };
    const jwtSecret = 'secret_jwt_key';
    const jwtOpt: JWT.SignOptions = {
      subject: `${user.id}`,
    };

    const token = JWT.sign(jwtPayload, jwtSecret, jwtOpt);
    
    response.status(200).send({ token });
  } catch (error) {
    next(error);
  }
});

sessionRoutes.post('/session/register', async (
  request: Request<{}, User>
  , response: Response
  , next: NextFunction
) => {
  try {
    const { email, name, password } = request.body;
    const hashPassword = getHash(password);
    await sessionRepository.create({
      name, 
      email, 
      password: hashPassword,
    });
    
    response.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

sessionRoutes.put('/session/update', jwtAuthenticationMiddleware, async (
  request: Request<{}, UpdateUser>
  , response: Response
  , next: NextFunction
) => {
  try {
    const {
      email,
      name,
      password,
      newEmail,
      newPassword
    } = request.body;
    const hashPassword = getHash(password);
    const hashNewPassword = newPassword ? getHash(newPassword) : undefined;
    const user = await sessionRepository.update({
      name, 
      email, 
      password: hashPassword,
      newPassword: hashNewPassword,
      newEmail,
    });
    
    const jwtPayload = {
      name: user.name,
      email: user.email,
    };
    const jwtSecret = 'secret_jwt_key';
    const jwtOpt: JWT.SignOptions = {
      subject: `${user.id}`,
    };

    const token = JWT.sign(jwtPayload, jwtSecret, jwtOpt);
    
    response.status(200).send({ token });
   } catch (error) {
    next(error);
  }
});

sessionRoutes.delete('/session/delete', jwtAuthenticationMiddleware, async (
  request: Request<{}, {password: string}>
  , response: Response
  , next: NextFunction
) => {
  try {
    const {
      password,
    } = request.body;
    const hashPassword = getHash(password);
    if(!request.user || typeof request.user !== 'object') {
      throw new ForbidenError("Faltando credenciais!");
    }
    const { email } = request.user;
    
    await sessionRepository.remove(
      email, 
      hashPassword,
    );
    
    response.sendStatus(200);
   } catch (error) {
    next(error);
  }
});

export default sessionRoutes;
