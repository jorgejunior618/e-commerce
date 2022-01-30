import db from "../../dataBase/db-config";
import DbError from "../../models/Errors/DbError";
import ForbidenError from "../../models/Errors/ForbidenError";
import { UpdateUser, User } from "../../models/User";

class SessionRepository {
  async validateLogin(email: string, password: string) : Promise<{success: boolean, user:User}> {
    try {
      const query = `
        SELECT id, email, name
        FROM ecommerce_users
        WHERE email = $1
        AND password = $2
      `;
      
      const { rows } = await db.query(query, [email, password]);
      
      if (!rows.length) {
        throw Error();
      }
      
      const [ user ] = rows;
      return user;
    } catch (error) {
      if(error instanceof ForbidenError) {
        throw error;
      } else {
        throw new ForbidenError('Usuário ou senha invalidos', error);
      }
    }
  }

  async create({name, email, password}: User): Promise<void> {
    try {
      const query = `
        INSERT
        INTO ecommerce_users
          (name, email, password)
        VALUES
          ($1, $2, $3)
      `;
  
      await db.query<User>(query, [name, email, password]);
    } catch (error) {
      throw new DbError('Erro na criação de usuário', error);
    }
  }
  
  async update({email, password, name, newEmail, newPassword}: UpdateUser,): Promise<User> {
    try {
      const { success } = await this.validateLogin(email, password);
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
      const { success } = await this.validateLogin(email, password);
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

export default new SessionRepository;
