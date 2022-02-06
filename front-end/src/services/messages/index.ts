import Message from '../../models/Message';
import * as httpHelper from '../../utils/http';

async function getMessages(): Promise<{messages: Message[]}> {
  const headers = httpHelper.defaultHeaders();

  const { data } = await httpHelper.get<{messages: Message[]}>(headers, '/messages');
  
  return data;
}

async function createMessage(message: string): Promise<void> {
  const headers = httpHelper.headersWithToken();

  await httpHelper.post(headers, { message }, '/messages');
}

const messageService = {
  getMessages,
  createMessage,
}

export default messageService;
