import User from "../User";

type Message = {
  id?: number,
  postDate: string,
  user?: User,
  message: string
}

export default Message;

