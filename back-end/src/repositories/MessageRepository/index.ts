import db from "../../dataBase/db-config";
import DbError from "../../models/Errors/DbError";
import { DbMessage, fromDbToMessage, Message } from "../../models/Message";

class MessageRepository {
  async getMessages() : Promise<Message[]> {
    try {
      const query = `
        SELECT 
          m.id,
          userId,
          name,
          email,
          message
        FROM ecommerce_messages m
        INNER JOIN ecommerce_users u
        ON m.userId = u.id
      `;
      
      const { rows } = await db.query<DbMessage>(query, []);
      
      const messages = rows.map((message) => {
        return fromDbToMessage(message);
      });

      return messages;
    } catch (error) {
      throw new DbError('Erro ao listar mensagens', error);
    }
  }

  async create(userId: number, message: string): Promise<void> {
    try {
      const query = `
        INSERT
        INTO ecommerce_messages
          (userId, message)
        VALUES
          ($1, $2)
      `;
  
      await db.query(query, [userId, message]);
    } catch (error) {
      throw new DbError('Erro na no envio da mensagem', error);
    }
  }
}

export default new MessageRepository;
