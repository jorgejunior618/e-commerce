import * as httpHelper from '../../utils/http';

async function getMessages() {
  const headers = httpHelper.defaultHeaders();

  const { data } = await httpHelper.get(headers, '/messages');
  
  return data;
}
const messageService = {
  getMessages,
}

export default messageService;

