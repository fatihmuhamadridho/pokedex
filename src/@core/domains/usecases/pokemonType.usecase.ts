/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonType } from '../models/pokemonType.model';
import { PokemonTypeRepository } from '../repositories/pokemonType.repository';
import { BaseResponse, BaseUseCase } from '../types/base.type';

export class GetAllPokemonTypeUseCase implements BaseUseCase<any, BaseResponse<PokemonType[]>> {
  constructor(private pokemonTypeRepository: PokemonTypeRepository) {}
  execute(params?: any): Promise<BaseResponse<PokemonType[]>> {
    return this.pokemonTypeRepository.getAll(params);
  }
}
