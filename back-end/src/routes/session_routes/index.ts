import { NextFunction, Request, Response, Router } from 'express';
import JWT from 'jsonwebtoken';
import { User } from '../../models/User';
import getHash from '../../utils/sha1Encoder';
import sessionRepository from '../../repositories/SessionRepository';
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
    const { user, success } = await sessionRepository.validateLogin(email, hashPassword);

    if (!success || !user) {
      throw new ForbidenError('Usuário ou senha inválidos');
    }

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
    console.log({error});
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

export default sessionRoutes;
