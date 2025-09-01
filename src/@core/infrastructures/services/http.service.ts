/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_API_URL_V2 } from '@/configs/base.config';

export class HttpService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_API_URL_V2,
    });
  }

  private async handleRequest<T>(promise: Promise<any>): Promise<T & AxiosError> {
    try {
      const res = await promise;
      return res.data as T & AxiosError;
    } catch (error: any) {
      throw error as AxiosError;
    }
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T & AxiosError> {
    return this.handleRequest<T>(this.client.get(url, config));
  }

  post<T = any>(url: string, data: any): Promise<T & AxiosError> {
    return this.handleRequest<T>(this.client.post(url, data));
  }

  put<T = any>(url: string, data: any): Promise<T & AxiosError> {
    return this.handleRequest<T>(this.client.put(url, data));
  }

  delete<T = any>(url: string): Promise<T & AxiosError> {
    return this.handleRequest<T>(this.client.delete(url));
  }
}
