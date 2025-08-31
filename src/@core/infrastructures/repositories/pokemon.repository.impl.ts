/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '@/@core/domains/models/pokemon.model';
import { PokemonRepository } from '@/@core/domains/repositories/pokemon.repository';
import { BaseResponse } from '@/@core/domains/types/base.type';
import { HttpService } from '../services/http.service';
import { PokemonDetailResponseDTO, PokemonListResponseDTO } from '@/@core/domains/types/pokemon.type';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private httpService: HttpService) {}

  async getAll(params?: any): Promise<BaseResponse<Pokemon[]>> {
    const response = await this.httpService.get<PokemonListResponseDTO>('/pokemon', { params });
    const pokemons = response.results.map(Pokemon.fromApi);

    await Promise.all(
      pokemons.map(async (pokemon) => {
        const detailResponse = await this.getDetail({ id: Number(pokemon.id) });
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
  }

  async getDetail(params?: any): Promise<BaseResponse<Pokemon>> {
    const { id = 1 } = params;
    const response = await this.httpService.get<PokemonDetailResponseDTO>(`/pokemon/${id}`);
    const pokemon = Pokemon.fromApiDetail(response);
    return { data: pokemon };
  }
}
