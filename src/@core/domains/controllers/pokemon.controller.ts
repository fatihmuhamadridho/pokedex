/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonRepositoryImpl } from '@/@core/infrastructures/repositories/pokemon.repository.impl';
import { GetAllPokemonUseCase } from '../usecases/pokemon.usecase';
import { HttpService } from '@/@core/infrastructures/services/http.service';

export class PokemonController {
  private getAllPokemonUseCase: GetAllPokemonUseCase;

  constructor() {
    const pokemonRepositoryImpl = new PokemonRepositoryImpl(new HttpService());
    this.getAllPokemonUseCase = new GetAllPokemonUseCase(pokemonRepositoryImpl);
  }

  getAllPokemon(params?: any) {
    return this.getAllPokemonUseCase.execute(params);
  }
}
