/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '../models/pokemon.model';
import { PokemonRepository } from '../repositories/pokemon.repository';
import { BaseResponse, BaseUseCase } from '../types/base.type';
import { PokemonDetailQueryParams, PokemonQueryParams } from '../types/pokemon.type';
import { PokemonTypeDetailQueryParams } from '../types/pokemonType.type';

export class GetAllPokemonUseCase implements BaseUseCase<PokemonQueryParams, BaseResponse<Pokemon[]>> {
  constructor(private pokemonRepository: PokemonRepository) {}
  execute(params?: PokemonQueryParams): Promise<BaseResponse<Pokemon[]>> {
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

export class GetDetailHiddenPokemonByFilterTypeUseCase
  implements
    BaseUseCase<
      {
        data: Pokemon[];
        params: PokemonTypeDetailQueryParams;
      },
      BaseResponse<Pokemon[]>
    >
{
  constructor(private pokemonRepository: PokemonRepository) {}
  execute(props: { data: Pokemon[]; params: PokemonTypeDetailQueryParams }): Promise<BaseResponse<Pokemon[]>> {
    return this.pokemonRepository.getDetailHiddenPokemonByFilterType(props);
  }
}
