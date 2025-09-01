import { PokemonRepositoryImpl } from '@/@core/infrastructures/repositories/pokemon.repository.impl';
import {
  GetAllPokemonByFilterTypeUseCase,
  GetAllPokemonUseCase,
  GetDetailHiddenPokemonByFilterTypeUseCase,
  GetDetailPokemonUseCase,
} from '../usecases/pokemon.usecase';
import { HttpService } from '@/@core/infrastructures/services/http.service';
import { PokemonDetailQueryParams, PokemonQueryParams } from '../types/pokemon.type';
import { PokemonTypeDetailQueryParams } from '../types/pokemonType.type';
import { Pokemon } from '../models/pokemon.model';

export class PokemonController {
  private getAllPokemonUseCase: GetAllPokemonUseCase;
  private getDetailPokemonUseCase: GetDetailPokemonUseCase;
  private getAllPokemonByFilterTypeUseCase: GetAllPokemonByFilterTypeUseCase;
  private getDetailHiddenPokemonByFilterTypeUseCase: GetDetailHiddenPokemonByFilterTypeUseCase;

  constructor() {
    const pokemonRepositoryImpl = new PokemonRepositoryImpl(new HttpService());
    this.getAllPokemonUseCase = new GetAllPokemonUseCase(pokemonRepositoryImpl);
    this.getDetailPokemonUseCase = new GetDetailPokemonUseCase(pokemonRepositoryImpl);
    this.getAllPokemonByFilterTypeUseCase = new GetAllPokemonByFilterTypeUseCase(pokemonRepositoryImpl);
    this.getDetailHiddenPokemonByFilterTypeUseCase = new GetDetailHiddenPokemonByFilterTypeUseCase(
      pokemonRepositoryImpl,
    );
  }

  getAllPokemon(params?: PokemonQueryParams) {
    return this.getAllPokemonUseCase.execute(params);
  }

  getDetailPokemon(params?: PokemonDetailQueryParams) {
    return this.getDetailPokemonUseCase.execute(params);
  }

  getAllPokemonByFilterType(params?: PokemonTypeDetailQueryParams) {
    return this.getAllPokemonByFilterTypeUseCase.execute(params);
  }

  getDetailHiddenPokemonByFilterType(props: { data: Pokemon[]; params: PokemonTypeDetailQueryParams }) {
    return this.getDetailHiddenPokemonByFilterTypeUseCase.execute(props);
  }
}
