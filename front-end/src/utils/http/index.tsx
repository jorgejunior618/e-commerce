import axios, { AxiosResponse } from "axios";

const BASE_URL = 'http://localhost:5000';

export async function post(headers: {}, params: {}, endpoint: string): Promise<{}> {
  try {
    return await axios.post(
      BASE_URL + endpoint,
      params,
      {
        headers,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function put(headers: {}, params: {}, endpoint: string): Promise<{}> {
  try {
    return await axios.put(
      BASE_URL + endpoint,
      params,
      {
        headers,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function get<T = any>(headers: {}, endpoint: string): Promise<AxiosResponse<T>> {
  try {
    return await axios.get<T>(
      BASE_URL + endpoint,
      {
        headers,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function remove(headers: {}, params: {}, endpoint: string): Promise<{}> {
  try {
    return await axios.delete(
      BASE_URL + endpoint,
      {
        params,
        headers,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

const getToken = (): string => JSON.parse((localStorage.getItem('session') || ''));

export const setSession = (session: {}) => {
  localStorage.setItem('session', JSON.stringify(session));
  return session;
};

export function headersWithToken() {
  const sessionToken = getToken();

  return {
    Authorization: `Bearer ${sessionToken}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
}

export function defaultHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
}
