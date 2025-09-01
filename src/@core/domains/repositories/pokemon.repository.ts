import { Pokemon } from '../models/pokemon.model';
import { BaseResponse } from '../types/base.type';
import { PokemonDetailQueryParams, PokemonQueryParams } from '../types/pokemon.type';
import { PokemonTypeDetailQueryParams } from '../types/pokemonType.type';

export interface PokemonRepository {
  getAll(params?: PokemonQueryParams): Promise<BaseResponse<Pokemon[]>>;
  getDetail(params?: PokemonDetailQueryParams): Promise<BaseResponse<Pokemon>>;
  getAllPokemonByFilterType(params?: PokemonTypeDetailQueryParams): Promise<BaseResponse<Pokemon[]>>;
}
