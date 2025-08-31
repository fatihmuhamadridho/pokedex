/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '../models/pokemon.model';
import { BaseResponse } from '../types/base.type';

export interface PokemonRepository {
  getAll(params?: any): Promise<BaseResponse<Pokemon[]>>;
  getDetail(params?: any): Promise<BaseResponse<Pokemon>>;
}
