/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '@/@core/domains/models/pokemon.model';
import { PokemonRepository } from '@/@core/domains/repositories/pokemon.repository';
import { BaseResponse } from '@/@core/domains/types/base.type';
import { HttpService } from '../services/http.service';
import {
  PokemonDetailQueryParams,
  PokemonDetailResponseDTO,
  PokemonListResponseDTO,
} from '@/@core/domains/types/pokemon.type';
import { AxiosError } from 'axios';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private httpService: HttpService) {}

  async getAll(params?: any): Promise<BaseResponse<Pokemon[]>> {
    try {
      const response = await this.httpService.get<PokemonListResponseDTO>('/pokemon', { params });
      const pokemons = response.results.map(Pokemon.fromApi);

      await Promise.all(
        pokemons.map(async (pokemon) => {
          const detailResponse = await this.getDetail({ search: Number(pokemon.id) });
          if (detailResponse.data) {
            pokemon.updateDetail(detailResponse.data);
          }
        }),
      );

      return {
        data: pokemons,
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
          message: `No Pokémon founds`,
        },
      });
    }
  }

  async getDetail(params?: PokemonDetailQueryParams): Promise<BaseResponse<Pokemon>> {
    try {
      const response = await this.httpService.get<PokemonDetailResponseDTO>(`/pokemon/${params?.search}`);
      const pokemon = Pokemon.fromApiDetail(response);
      return { data: pokemon };
    } catch (err: unknown) {
      const error = err as AxiosError;
      return Promise.reject({
        status: {
          code: String(error.response?.status || 500),
          message: `No Pokémon found with search parameter "${params?.search}"`,
        },
      });
    }
  }
}
