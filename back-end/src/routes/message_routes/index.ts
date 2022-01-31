import { NextFunction, Request, Response, Router } from 'express';
import JWT from 'jsonwebtoken';
import { UpdateUser } from '../../models/User';
import getHash from '../../utils/sha1Encoder';
import userRepository from '../../repositories/UserRepository';
import jwtAuthenticationMiddleware from '../../middlewares/jwtAuthenticationMiddleware';
import ForbidenError from '../../models/Errors/ForbidenError';
import messageRepository from '../../repositories/MessageRepository';
import { Message } from '../../models/Message';

const messageRoutes = Router();
const MESSAGE_URL = '/messages';

messageRoutes.get(MESSAGE_URL, async (
  request: Request
  , response: Response<Message[]>
  , next: NextFunction
) => {
  try {
    const messages = await messageRepository.getMessages();
    response.status(200).send(messages);
   } catch (error) {
    next(error);
  }
});

messageRoutes.post(MESSAGE_URL, jwtAuthenticationMiddleware, async (
  request: Request<{}, {message: string, id: number}>
  , response: Response
  , next: NextFunction
) => {
  try {
    if(!request.user || !request.user.id || typeof request.user !== 'object') {
      throw new ForbidenError("Faltando credenciais!");
    }
    const { message } = request.body;
    const { id } = request.user;
    
    await messageRepository.create(
      id,
      message,
    );
    
    response.sendStatus(200);
   } catch (error) {
    next(error);
  }
});

export default messageRoutes;
