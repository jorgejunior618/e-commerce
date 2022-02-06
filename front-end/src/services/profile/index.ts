import * as httpHelper from '../../utils/http';

async function login(params: {email: string, password: string}): Promise<{}> {
  const headers = httpHelper.headersWithToken();

  const { data } = await httpHelper.post(headers, params, '/session/login');
  console.log({data});
  return data;
}

async function createProfile(email: string, name:string, password: string): Promise<{}> {
  const headers = httpHelper.headersWithToken();

  const { data } = await httpHelper.get(headers, '/session/register');
  console.log({data});
  return data;
}

const profileService = {
  getProfile: login,
  createProfile,
}

export default profileService;

