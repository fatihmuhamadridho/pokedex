/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonType } from '../models/pokemonType.model';
import { BaseResponse } from '../types/base.type';

export interface PokemonTypeRepository {
  getAll(params?: any): Promise<BaseResponse<PokemonType[]>>;
  getDetail(params?: any): Promise<BaseResponse<PokemonType>>;
}
