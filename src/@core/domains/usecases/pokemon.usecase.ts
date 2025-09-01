/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '../models/pokemon.model';
import { PokemonRepository } from '../repositories/pokemon.repository';
import { BaseResponse, BaseUseCase } from '../types/base.type';
import { PokemonDetailQueryParams } from '../types/pokemon.type';

export class GetAllPokemonUseCase implements BaseUseCase<any, BaseResponse<Pokemon[]>> {
  constructor(private pokemonRepository: PokemonRepository) {}
  execute(params?: any): Promise<BaseResponse<Pokemon[]>> {
    return this.pokemonRepository.getAll(params);
  }
}

export class GetDetailPokemonUseCase implements BaseUseCase<PokemonDetailQueryParams, BaseResponse<Pokemon>> {
  constructor(private pokemonRepository: PokemonRepository) {}
  execute(params?: PokemonDetailQueryParams | undefined): Promise<BaseResponse<Pokemon>> {
    const search = String(params?.search);
    return this.pokemonRepository.getDetail({ search: search });
  }
}

export class GetAllPokemonByFilterTypeUseCase implements BaseUseCase<any, BaseResponse<Pokemon[]>> {
  constructor(private pokemonRepository: PokemonRepository) {}
  execute(params?: any): Promise<BaseResponse<Pokemon[]>> {
    return this.pokemonRepository.getAllPokemonByFilterType(params);
  }
}
