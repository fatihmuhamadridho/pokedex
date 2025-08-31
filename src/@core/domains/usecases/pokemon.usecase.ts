/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '../models/pokemon.model';
import { PokemonRepository } from '../repositories/pokemon.repository';
import { BaseResponse, BaseUseCase } from '../types/base.type';

export class GetAllPokemonUseCase implements BaseUseCase<any, BaseResponse<Pokemon[]>> {
  constructor(private pokemonRepository: PokemonRepository) {}
  execute(params?: any): Promise<BaseResponse<Pokemon[]>> {
    return this.pokemonRepository.getAll(params);
  }
}
