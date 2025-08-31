import { PokemonListItemDTO } from '../types/pokemon.type';

export class Pokemon {
  constructor(
    public readonly id: string,
    public name: string,
    public type: string,
    public height: string,
    public weight: string,
    public skill: string,
    public weakness: string[],
    public statistics: {
      health_power: number;
      attack: number;
      defense: number;
      sp_attack: number;
      sp_defense: number;
      speed: number;
    },
  ) {}

  static fromApi(data: PokemonListItemDTO): Pokemon {
    const rawId = data.url.split('/')[6];
    const id = rawId.padStart(3, '0');

    return new Pokemon(id, data.name, '', '', '', '', [''], {
      health_power: 0,
      attack: 0,
      defense: 0,
      sp_attack: 0,
      sp_defense: 0,
      speed: 0,
    });
  }
}
