import db from "../../dataBase/db-config";
import DbError from "../../models/Errors/DbError";
import User from "../../models/User";

type UpdateUser = {
  email: string,
  password: string,
  name?: string,
  newEmail?: string,
  newPassword?: string,
};

class SessionRepository {
  async create({name, email, password}: User): Promise<User> {
    try {
      const query = `
        INSERT
        INTO ecommerce_users
          (name, email, password)
        VALUES
          ($1, $2, $3)
        RETURNING id, name, email
      `;
  
      const { rows } = await db.query<User>(query, [name, email, password]);
      const [ newUser ] = rows;
      
      return newUser;
    } catch (error) {
      throw new DbError('Erro na criação de usuário', error);
    }
  }
  
  async update({email, password, name, newEmail, newPassword}: UpdateUser,): Promise<User> {
    try {
      const query = `
        UPDATE ecommerce_users
        SET 
          ${newEmail ? 'email = $4,' : ''}
          ${newPassword ? 'password = $5,' : ''}
          ${name ? 'name = $3,' : ''}
        WHERE
          email = $1,
          password = $2
        RETURNING id, name, email
      `;
      
      const { rows } = await db.query<User>(query, [email, password, name, newEmail, newPassword]);
      const [ newUser ] = rows;
      
      return newUser;
    } catch (error) {
      throw new DbError('Erro na atualização de dados', error);
    }
  }

  async remove(email: string, password: string): Promise<void> {
    try {
      const query = `
        DELETE
        FROM ecommerce_users
        WHERE email = $1
        AND password = $2
      `;
      
      await db.query(query, [email, password]);
    } catch (error) {
      throw new DbError('Erro na exclusão da conta', error);
    }
  }

  async valdateLogin(email: string, password: string) : Promise<User> {
    try {
      const query = `
        SELECT *
        FROM ecommerce_users
        WHERE email = $1
        AND password = $2
      `;
      
      const { rows } = await db.query(query, [email, password]);
      const [ user ] = rows;
      return user;
    } catch (error) {
      throw new DbError('Erro na remoção de usuário', error);
    }
  }
}

export default new SessionRepository;
