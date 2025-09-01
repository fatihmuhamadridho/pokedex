import { Pokemon } from '@/@core/domains/models/pokemon.model';
import { PokemonRepository } from '@/@core/domains/repositories/pokemon.repository';
import { BaseResponse } from '@/@core/domains/types/base.type';
import { HttpService } from '../services/http.service';
import {
  PokemonDetailQueryParams,
  PokemonDetailResponseDTO,
  PokemonListResponseDTO,
  PokemonQueryParams,
} from '@/@core/domains/types/pokemon.type';
import { AxiosError } from 'axios';
import { PokemonTypeRepositoryImpl } from './pokemonType.repository.impl';
import { PokemonTypeDetailQueryParams } from '@/@core/domains/types/pokemonType.type';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private httpService: HttpService) {}

  async getAll(params?: PokemonQueryParams): Promise<BaseResponse<Pokemon[]>> {
    try {
      const queryParams = Pokemon.toQueryParams(params || { page: 1, limit: 10 });
      const response = await this.httpService.get<PokemonListResponseDTO>('/pokemon', { params: queryParams });
      const pokemons = response.results.map(Pokemon.fromApi);
      const metaResponse = Pokemon.fromQueryParamsToPagination({ ...queryParams, count: response.count });

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
        meta: metaResponse,
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

  async getAllPokemonByFilterType(params?: PokemonTypeDetailQueryParams): Promise<BaseResponse<Pokemon[]>> {
    try {
      const pokemonTypeRepositoryImpl = new PokemonTypeRepositoryImpl(this.httpService);
      const response = await pokemonTypeRepositoryImpl.getDetail(params);
      const pokemons = response.data?.pokemons || [];
      const queryParams = Pokemon.toQueryParams(params || { page: 1, limit: 10 });
      const metaResponse = Pokemon.fromQueryParamsToPagination({ ...queryParams, count: pokemons.length });

      await Promise.all(
        pokemons
          .filter((item, index) => index > queryParams.offset! && index <= queryParams.offset! + queryParams.limit!)
          .map(async (pokemon) => {
            const detailResponse = await this.getDetail({ search: Number(pokemon.id) });
            if (detailResponse.data) {
              pokemon.updateDetail(detailResponse.data);
            }
          }),
      );

      return {
        data: pokemons,
        meta: metaResponse,
      };
    } catch (err: unknown) {
      const error = err as AxiosError;
      return Promise.reject({
        status: {
          code: String(error.response?.status || 500),
          message: `Something went wrong`,
        },
      });
    }
  }

  async getDetailHiddenPokemonByFilterType(props: {
    data: Pokemon[];
    params: PokemonTypeDetailQueryParams;
  }): Promise<BaseResponse<Pokemon[]>> {
    try {
      const queryParams = Pokemon.toQueryParams(props.params || { page: 1, limit: 10 });

      const start = queryParams.offset!;
      const end = 1 + start + queryParams.limit!;

      await Promise.all(
        props.data.slice(start, end).map(async (pokemon) => {
          const detailResponse = await this.getDetail({ search: Number(pokemon.id) });
          if (detailResponse.data) {
            pokemon.updateDetail(detailResponse.data);
          }
        }),
      );

      const metaResponse = Pokemon.fromQueryParamsToPagination({
        ...queryParams,
        count: props.data.length,
      });

      return { data: props.data, meta: metaResponse };
    } catch (err: unknown) {
      const error = err as AxiosError;
      return Promise.reject({
        status: {
          code: String(error.response?.status || 500),
          message: `Something went wrong`,
        },
      });
    }
  }
}
