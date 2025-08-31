import { Pokemon } from '@/@core/domains/models/pokemon';
import { PokemonRepository } from '@/@core/domains/repositories/pokemon.repository';
import { BaseResponse } from '@/@core/domains/types/base.type';
import { HttpService } from '../services/http.service';
import { PokemonListResponseDTO } from '@/@core/domains/types/pokemon.type';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private http: HttpService) {}
  async getAll(): Promise<BaseResponse<Pokemon[]>> {
    const response = await this.http.get<PokemonListResponseDTO>('/pokemon');
    return {
      data: response.results.map(Pokemon.fromApi),
    };
  }
}
