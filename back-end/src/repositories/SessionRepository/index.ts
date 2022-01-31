import db from "../../dataBase/db-config";
import DbError from "../../models/Errors/DbError";
import ForbidenError from "../../models/Errors/ForbidenError";
import { UpdateUser, User } from "../../models/User";

class SessionRepository {
  async validateLogin(email: string, password: string) : Promise<{success: boolean, user:User | undefined}> {
    try {
      const query = `
        SELECT id, email, name
        FROM ecommerce_users
        WHERE email = $1
        AND password = $2
      `;
      
      const { rows } = await db.query(query, [email, password]);      
      if (!rows.length) {
        return {success: false, user: undefined};
      }
      
      const [ user ] = rows;
      
      return {
        success: true,
        user,
      };
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
}

export default new SessionRepository;
