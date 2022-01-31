import db from "../../dataBase/db-config";
import DbError from "../../models/Errors/DbError";
import ForbidenError from "../../models/Errors/ForbidenError";
import { UpdateUser, User } from "../../models/User";
import SessionRepository from "../SessionRepository";

class UserRepository {
  async update({email, password, name, newEmail, newPassword}: UpdateUser,): Promise<User> {
    try {
      const { success } = await SessionRepository.validateLogin(email, password);
      if(!success) {
        throw new ForbidenError('Senha inválida');
      }
      const setFields = `${newEmail ? `email = '${newEmail}'` : ''} ${newEmail && (name || newPassword ) ? ',': ''}
      ${newPassword ? `password = '${newPassword}'` : ''} ${newPassword && name ? ',': ''}${name ? `name = '${name}'` : ''}`
      const query = `
        UPDATE ecommerce_users
        SET 
          ${newEmail ? `email = '${newEmail}'` : ''}
          ${newEmail && (name || newPassword ) ? ',': ''}
          ${newPassword ? `password = '${newPassword}'` : ''}${newPassword && name ? ',': ''}
          ${name ? `name = '${name}'` : ''}
        WHERE
          email = $1
          AND password = $2
          RETURNING id, name, email
      `;

      const { rows } = await db.query<User>(query, [email, password]);
      
      const [ newUser ] = rows;
      
      return newUser;
    } catch (error) {
      if(error instanceof ForbidenError) {
        throw error;
      } else {
        throw new DbError('Erro na atualização de dados', error);
      }
    }
  }

  async remove(email: string, password: string): Promise<void> {
    try {
      const { success } = await SessionRepository.validateLogin(email, password);
      if(!success) {
        throw new ForbidenError('Senha inválida');
      }
      const query = `
        DELETE
        FROM ecommerce_users
        WHERE email = $1
        AND password = $2
      `;
      
      await db.query(query, [email, password]);
    } catch (error) {
      if(error instanceof ForbidenError) {
        throw error;
      } else {
        throw new DbError('Erro na exclusão da conta', error);
      }
    }
  }
}

export default new UserRepository;
