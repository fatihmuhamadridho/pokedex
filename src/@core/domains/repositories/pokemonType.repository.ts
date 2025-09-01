/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonType } from '../models/pokemonType.model';
import { BaseResponse } from '../types/base.type';
import { PokemonTypeDetailQueryParams } from '../types/pokemonType.type';

export interface PokemonTypeRepository {
  getAll(params?: any): Promise<BaseResponse<PokemonType[]>>;
  getDetail(params?: PokemonTypeDetailQueryParams): Promise<BaseResponse<PokemonType>>;
}
