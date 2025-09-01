/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonType } from '@/@core/domains/models/pokemonType.model';
import { PokemonTypeRepository } from '@/@core/domains/repositories/pokemonType.repository';
import { BaseResponse } from '@/@core/domains/types/base.type';
import { HttpService } from '../services/http.service';
import {
  PokemonTypeDetailResponseDTO,
  PokemonTypeListResponseDTO,
  PokemonTypeDetailQueryParams,
} from '@/@core/domains/types/pokemonType.type';
import { AxiosError } from 'axios';

export class PokemonTypeRepositoryImpl implements PokemonTypeRepository {
  constructor(private httpService: HttpService) {}
  async getAll(params?: any): Promise<BaseResponse<PokemonType[]>> {
    try {
      const response = await this.httpService.get<PokemonTypeListResponseDTO>('/type', { params });
      const pokemonTypes = response.results.filter((item) => item.name !== 'unknown').map(PokemonType.fromApi);

      await Promise.all(
        pokemonTypes.map(async (pokemonType) => {
          const detailResponse = await this.getDetail({ type: String(pokemonType.id) });
          if (detailResponse.data) {
            pokemonType.updateDetail(detailResponse.data);
          }
        }),
      );

      return {
        data: pokemonTypes,
        meta: {
          limit: 20,
          total_items: response.count,
          page: 1,
          total_pages: 100,
        },
      };
    } catch (err: unknown) {
      const error = err as AxiosError;
      return Promise.reject({
        status: {
          code: String(error.response?.status || 500),
          message: error.message,
        },
      });
    }
  }

  async getDetail(params?: PokemonTypeDetailQueryParams): Promise<BaseResponse<PokemonType>> {
    try {
      const response = await this.httpService.get<PokemonTypeDetailResponseDTO>(`/type/${params?.type}`);
      return {
        data: PokemonType.fromApiDetail(response),
      };
    } catch (err) {
      const error = err as AxiosError;
      return Promise.reject({
        status: {
          code: String(error.response?.status || 500),
          message: error.message,
        },
      });
    }
  }
}
