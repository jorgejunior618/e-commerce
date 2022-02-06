import User from '../../models/User';
import * as httpHelper from '../../utils/http';

async function getProfile(): Promise<{ user: User }> {
  const headers = httpHelper.headersWithToken();

  const { data } = await httpHelper.get(headers, '/profile');
  
  return data;
}

async function login(params: {email: string, password: string}): Promise<{ token: string }> {
  const headers = httpHelper.headersWithToken();

  const { data } = await httpHelper.post(headers, params, '/session/login');
  
  return data;
}

async function createProfile(email: string, name:string, password: string): Promise<{}> {
  const headers = httpHelper.headersWithToken();

  const params = {
    email,
    name,
    password,
  }

  const { data } = await httpHelper.post(headers, params, '/session/register');
  
  return data;
}

const profileService = {
  login,
  createProfile,
  getProfile,
}

export default profileService;

