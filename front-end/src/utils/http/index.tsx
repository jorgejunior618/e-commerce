import axios, { AxiosResponse } from "axios";
import HttpException from "../../models/HttpException";

const BASE_URL = 'http://localhost:5000';

export async function post<T = any>(headers: {}, params: {}, endpoint: string): Promise<AxiosResponse<T>> {
  try {
    return await axios.post<T>(
      BASE_URL + endpoint,
      params,
      {
        headers,
      }
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new HttpException(error.response?.status ?? 500, error.message);
    }
    
    return Promise.reject(error);
  }
}

export async function put<T = any>(headers: {}, params: {}, endpoint: string): Promise<AxiosResponse<T>> {
  try {
    return await axios.put<T>(
      BASE_URL + endpoint,
      params,
      {
        headers,
      }
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new HttpException(error.response?.status ?? 500, error.message);
    }
    
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
    if (axios.isAxiosError(error)) {
      throw new HttpException(error.response?.status ?? 500, error.message);
    }
    
    return Promise.reject(error);
  }
}

export async function remove<T = any>(headers: {}, params: {}, endpoint: string): Promise<AxiosResponse<T>> {
  try {
    return await axios.delete<T>(
      BASE_URL + endpoint,
      {
        params,
        headers,
      }
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new HttpException(error.response?.status ?? 500, error.message);
    }
    
    return Promise.reject(error);
  }
}

const getSession = (): {token?: string} => JSON.parse((localStorage.getItem('session') || '{}'));

export const isLogged = (): boolean => {
  const { token } = getSession();

  console.log(token);
  
  
  return token !== undefined && token !== null;
}

export const setSession = (session: {}) => {
  localStorage.setItem('session', JSON.stringify(session));
  return session;
};

export function headersWithToken() {
  const { token } = getSession();

  return {
    Authorization: `Bearer ${token}`,
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
