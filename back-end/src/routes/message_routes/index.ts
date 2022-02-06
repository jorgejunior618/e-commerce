import { NextFunction, Request, Response, Router } from 'express';
import jwtAuthenticationMiddleware from '../../middlewares/jwtAuthenticationMiddleware';
import ForbidenError from '../../models/Errors/ForbidenError';
import messageRepository from '../../repositories/MessageRepository';
import { Message } from '../../models/Message';

const messageRoutes = Router();
const MESSAGE_URL = '/messages';

messageRoutes.get(MESSAGE_URL, async (
  request: Request
  , response: Response<{messages: Message[]}>
  , next: NextFunction
) => {
  try {
    const messages = await messageRepository.getMessages();
    response.status(200).send({ messages });
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
    if(!request.user || typeof request.user !== 'object' || !request.user.id ) {
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
