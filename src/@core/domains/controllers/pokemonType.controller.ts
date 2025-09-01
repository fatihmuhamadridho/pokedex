/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonTypeRepositoryImpl } from '@/@core/infrastructures/repositories/pokemonType.repository.impl';
import { GetAllPokemonTypeUseCase, GetDetailPokemonTypeUseCase } from '../usecases/pokemonType.usecase';
import { HttpService } from '@/@core/infrastructures/services/http.service';
import { PokemonTypeDetailQueryParams } from '../types/pokemonType.type';

export class PokemonTypeController {
  private getAllPokemonTypeUseCase: GetAllPokemonTypeUseCase;
  private getDetailPokemonTypeUseCase: GetDetailPokemonTypeUseCase;

  constructor() {
    const pokemonTypeRepositoryImpl = new PokemonTypeRepositoryImpl(new HttpService());
    this.getAllPokemonTypeUseCase = new GetAllPokemonTypeUseCase(pokemonTypeRepositoryImpl);
    this.getDetailPokemonTypeUseCase = new GetDetailPokemonTypeUseCase(pokemonTypeRepositoryImpl);
  }

  getAllPokemonType(params?: any) {
    return this.getAllPokemonTypeUseCase.execute(params);
  }

  getDetailPokemonType(params?: PokemonTypeDetailQueryParams) {
    return this.getDetailPokemonTypeUseCase.execute(params);
  }
}
