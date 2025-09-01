import { PokemonTypeDetailResponseDTO, PokemonTypeListItemDTO } from '../types/pokemonType.type';
import { Pokemon } from './pokemon.model';

export class PokemonType {
  constructor(
    public readonly id: string,
    public name: string,
    public weakness: string[],
    public pokemons: Pokemon[],
  ) {}

  updateDetail(data: PokemonType) {
    this.name = data.name;
    this.weakness = data.weakness;
  }

  static fromApi(data: PokemonTypeListItemDTO): PokemonType {
    const rawId = data.url.split('/')[6];
    return new PokemonType(rawId, data.name, [], []);
  }

  static fromApiDetail(data: PokemonTypeDetailResponseDTO): PokemonType {
    const weakness = data.damage_relations.double_damage_from.map((item) => item.name).reverse();
    return new PokemonType(String(data.id), data.name, weakness, data.pokemon.map(Pokemon.fromApiPokemonTypeDetail));
  }

  static DummyData(): PokemonType {
    return new PokemonType('', '', [], []);
  }
}
