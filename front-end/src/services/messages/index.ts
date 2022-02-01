import Message from '../../models/Message';
import * as httpHelper from '../../utils/http';

async function getMessages(): Promise<{messages: Message[]}> {
  const headers = httpHelper.defaultHeaders();

  const { data } = await httpHelper.get<{messages: Message[]}>(headers, '/messages');
  
  return data;
}
const messageService = {
  getMessages,
}

export default messageService;

