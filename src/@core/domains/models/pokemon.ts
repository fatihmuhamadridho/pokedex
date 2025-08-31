import { PokemonDetailResponseDTO, PokemonListItemDTO } from '../types/pokemon.type';

export class Pokemon {
  constructor(
    public readonly id: string,
    public name: string,
    public type: string[],
    public height: number,
    public weight: number,
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
    public image: string,
  ) {}

  updateDetail(data: Pokemon) {
    this.name = data.name;
    this.type = data.type;
    this.height = data.height;
    this.weight = data.weight;
    this.skill = data.skill;
    this.weakness = data.weakness;
    this.statistics = data.statistics;
    this.image = data.image;
  }

  static fromApi(data: PokemonListItemDTO): Pokemon {
    const rawId = data.url.split('/')[6];
    return new Pokemon(
      rawId,
      data.name,
      [],
      0,
      0,
      '',
      [],
      {
        health_power: 0,
        attack: 0,
        defense: 0,
        sp_attack: 0,
        sp_defense: 0,
        speed: 0,
      },
      '',
    );
  }

  static fromApiDetail(data: PokemonDetailResponseDTO): Pokemon {
    const type = data.types.map((item) => item.type.name);
    const statistics = {
      health_power: 0,
      attack: 0,
      defense: 0,
      sp_attack: 0,
      sp_defense: 0,
      speed: 0,
    };
    const skill = data.abilities[0].ability.name;
    data.stats.map((item) => {
      if (item.stat.name === 'hp') statistics.health_power = item.base_stat;
      if (item.stat.name === 'attack') statistics.attack = item.base_stat;
      if (item.stat.name === 'defense') statistics.defense = item.base_stat;
      if (item.stat.name === 'special-attack') statistics.sp_attack = item.base_stat;
      if (item.stat.name === 'special-defense') statistics.sp_defense = item.base_stat;
      if (item.stat.name === 'speed') statistics.speed = item.base_stat;
    });
    return new Pokemon(
      String(data.id),
      data.name,
      type,
      data.height,
      data.weight,
      skill,
      [],
      statistics,
      data.sprites.other.dream_world.front_default,
    );
  }

  static DummyData(): Pokemon {
    return new Pokemon(
      '',
      '',
      [],
      0,
      0,
      '',
      [],
      {
        health_power: 0,
        attack: 0,
        defense: 0,
        sp_attack: 0,
        sp_defense: 0,
        speed: 0,
      },
      '',
    );
  }
}
