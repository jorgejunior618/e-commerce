import { User } from "../User";

export type Message = {
  id?: number,
  user: User,
  message: string
  postDate: string
}

export type DbMessage = {
  id?: number,
  userid: number,
  email: string,
  name: string,
  postdate: string,
  message: string
}

export function fromDbToMessage(dbMessage: DbMessage) : Message {
  const { id, email, message, name, userid, postdate } = dbMessage;
  
  return {
    id,
    message,
    postDate: postdate,
    user: {
      id: userid,
      email,
      name
    }
  };
}