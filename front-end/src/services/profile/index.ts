import * as httpHelper from '../../utils/http';

async function getProfile() {
  const headers = httpHelper.headersWithToken();

  const response = await httpHelper.get(headers, '/messages');
  console.log({response});
  
}
const profileService = {
  getProfile,
}

export default profileService;

