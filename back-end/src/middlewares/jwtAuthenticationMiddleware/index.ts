import { NextFunction, Request, Response } from "express";
import AuthorizationType from "../../models/Authorization";
import ForbidenError from "../../models/Errors/ForbidenError";
import JWT from 'jsonwebtoken';
import { User } from "../../models/User";

async function jwtAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {
  try {
    const authHeader = request.headers['authorization'];
    
    if(!authHeader) {
      throw new ForbidenError('Credenciais não informadas');
    }
    
    const [ authType, authToken ] = authHeader.split(' ');
    
    if (authType != AuthorizationType.BEARER || !authToken) {
      throw new ForbidenError("Autenticação inválida");
    }

    const tokenPayload = JWT.verify(authToken, 'secret_jwt_key');
    
    if(typeof tokenPayload !== 'object' || !tokenPayload.sub) {
      throw new ForbidenError("Autenticação inválida");
    }

    const id = tokenPayload.sub;

    const user: User = {
      id: Number(id),
      name: tokenPayload.name,
      email: tokenPayload.email,
    }

    request.user = user;
    next();
  } catch (error) {
    
    next(error);
  }
}

export default jwtAuthenticationMiddleware;

