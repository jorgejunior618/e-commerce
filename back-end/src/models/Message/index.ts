import { User } from "../User";

export type Message = {
  id?: number,
  user: User,
  message: string
}

export type DbMessage = {
  id?: number,
  userid: number,
  email: string,
  name: string,
  message: string
}

export function fromDbToMessage(dbMessage: DbMessage) : Message {
  const { id, email, message, name, userid } = dbMessage;
  
  return {
    id,
    message,
    user: {
      id: userid,
      email,
      name
    }
  };
}