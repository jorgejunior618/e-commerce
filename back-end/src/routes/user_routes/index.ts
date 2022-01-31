import { NextFunction, Request, Response, Router } from 'express';
import JWT from 'jsonwebtoken';
import { UpdateUser } from '../../models/User';
import getHash from '../../utils/sha1Encoder';
import userRepository from '../../repositories/UserRepository';
import jwtAuthenticationMiddleware from '../../middlewares/jwtAuthenticationMiddleware';
import ForbidenError from '../../models/Errors/ForbidenError';

const userRoutes = Router();
const USER_URL = '/profile';

userRoutes.get(USER_URL, jwtAuthenticationMiddleware, async (
  request: Request
  , response: Response
  , next: NextFunction
) => {
  try {
    const { user } = request;
    
    response.status(200).send({ user });
   } catch (error) {
    next(error);
  }
});

userRoutes.put(USER_URL, jwtAuthenticationMiddleware, async (
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
    const user = await userRepository.update({
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

userRoutes.delete(USER_URL, jwtAuthenticationMiddleware, async (
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
    
    await userRepository.remove(
      email, 
      hashPassword,
    );
    
    response.sendStatus(200);
   } catch (error) {
    next(error);
  }
});


export default userRoutes;
