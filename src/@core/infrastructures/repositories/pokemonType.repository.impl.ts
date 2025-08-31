/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonType } from '@/@core/domains/models/pokemonType.model';
import { PokemonTypeRepository } from '@/@core/domains/repositories/pokemonType.repository';
import { BaseResponse } from '@/@core/domains/types/base.type';
import { HttpService } from '../services/http.service';
import { PokemonTypeDetailResponseDTO, PokemonTypeListResponseDTO } from '@/@core/domains/types/pokemonType.type';

export class PokemonTypeRepositoryImpl implements PokemonTypeRepository {
  constructor(private httpService: HttpService) {}
  async getAll(params?: any): Promise<BaseResponse<PokemonType[]>> {
    const response = await this.httpService.get<PokemonTypeListResponseDTO>('/type', { params });
    const pokemonTypes = response.results.map(PokemonType.fromApi);

    await Promise.all(
      pokemonTypes.map(async (pokemonType) => {
        const detailResponse = await this.getDetail({ id: Number(pokemonType.id) });
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
  }

  async getDetail(params?: any): Promise<BaseResponse<PokemonType>> {
    const response = await this.httpService.get<PokemonTypeDetailResponseDTO>(`/type/${params.id}`);
    return {
      data: PokemonType.fromApiDetail(response),
    };
  }
}
