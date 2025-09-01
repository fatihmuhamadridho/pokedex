/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonRepositoryImpl } from '@/@core/infrastructures/repositories/pokemon.repository.impl';
import { GetAllPokemonUseCase, GetDetailPokemonUseCase } from '../usecases/pokemon.usecase';
import { HttpService } from '@/@core/infrastructures/services/http.service';
import { PokemonDetailQueryParams } from '../types/pokemon.type';

export class PokemonController {
  private getAllPokemonUseCase: GetAllPokemonUseCase;
  private getDetailPokemonUseCase: GetDetailPokemonUseCase;

  constructor() {
    const pokemonRepositoryImpl = new PokemonRepositoryImpl(new HttpService());
    this.getAllPokemonUseCase = new GetAllPokemonUseCase(pokemonRepositoryImpl);
    this.getDetailPokemonUseCase = new GetDetailPokemonUseCase(pokemonRepositoryImpl);
  }

  getAllPokemon(params?: any) {
    return this.getAllPokemonUseCase.execute(params);
  }

  getDetailPokemon(params?: PokemonDetailQueryParams) {
    return this.getDetailPokemonUseCase.execute(params);
  }
}
