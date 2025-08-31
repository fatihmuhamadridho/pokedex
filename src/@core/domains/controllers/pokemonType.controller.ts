/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonTypeRepositoryImpl } from '@/@core/infrastructures/repositories/pokemonType.repository.impl';
import { GetAllPokemonTypeUseCase } from '../usecases/pokemonType.usecase';
import { HttpService } from '@/@core/infrastructures/services/http.service';

export class PokemonTypeController {
  private getAllPokemonTypeUseCase: GetAllPokemonTypeUseCase;

  constructor() {
    const pokemonTypeRepositoryImpl = new PokemonTypeRepositoryImpl(new HttpService());
    this.getAllPokemonTypeUseCase = new GetAllPokemonTypeUseCase(pokemonTypeRepositoryImpl);
  }

  getAllPokemonType(params?: any) {
    return this.getAllPokemonTypeUseCase.execute(params);
  }
}
