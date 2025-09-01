/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonRepositoryImpl } from '@/@core/infrastructures/repositories/pokemon.repository.impl';
import {
  GetAllPokemonByFilterTypeUseCase,
  GetAllPokemonUseCase,
  GetDetailPokemonUseCase,
} from '../usecases/pokemon.usecase';
import { HttpService } from '@/@core/infrastructures/services/http.service';
import { PokemonDetailQueryParams } from '../types/pokemon.type';
import { PokemonTypeDetailQueryParams } from '../types/pokemonType.type';

export class PokemonController {
  private getAllPokemonUseCase: GetAllPokemonUseCase;
  private getDetailPokemonUseCase: GetDetailPokemonUseCase;
  private getAllPokemonByFilterTypeUseCase: GetAllPokemonByFilterTypeUseCase;

  constructor() {
    const pokemonRepositoryImpl = new PokemonRepositoryImpl(new HttpService());
    this.getAllPokemonUseCase = new GetAllPokemonUseCase(pokemonRepositoryImpl);
    this.getDetailPokemonUseCase = new GetDetailPokemonUseCase(pokemonRepositoryImpl);
    this.getAllPokemonByFilterTypeUseCase = new GetAllPokemonByFilterTypeUseCase(pokemonRepositoryImpl);
  }

  getAllPokemon(params?: any) {
    return this.getAllPokemonUseCase.execute(params);
  }

  getDetailPokemon(params?: PokemonDetailQueryParams) {
    return this.getDetailPokemonUseCase.execute(params);
  }

  getAllPokemonByFilterType(params?: PokemonTypeDetailQueryParams) {
    return this.getAllPokemonByFilterTypeUseCase.execute(params);
  }
}
