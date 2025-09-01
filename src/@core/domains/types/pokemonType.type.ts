/* eslint-disable @typescript-eslint/no-explicit-any */
export type PokemonTypeValue =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown';

export type PokemonTypeDetailQueryParams = {
  type?: string;
  page?: number;
  limit?: number;
};

export interface PokemonTypeListResponseDTO {
  count: number;
  next: string;
  previous: string;
  results: PokemonTypeListItemDTO[];
}

export interface PokemonTypeListItemDTO {
  name: string;
  url: string;
}

export interface PokemonTypeDetailResponseDTO {
  damage_relations: {
    double_damage_from: PokemonTypeDetailDoubleDamageItemDTO[];
    double_damage_to: any[];
    half_damage_from: any[];
    half_damage_to: PokemonTypeDetailHalfDamageToItemDTO[];
    no_damage_from: PokemonTypeDetailNoDamageFromItemDTO[];
    no_damage_to: PokemonTypeDetailNoDamageToItemDTO[];
  };
  game_indices: PokemonTypeDetailIndex[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  move_damage_class: {
    name: string;
    url: string;
  };
  moves: {
    name: string;
    url: string;
  }[];
  name: string;
  names: PokemonTypeDetailNameItemDTO[];
  past_damage_relations: any[];
  pokemon: PokemonTypeDetailPokemonItemDTO[];
  sprites: {
    'generation-iii': {
      colosseum: PokemonTypeDetailNameIconItemDTO;
      emerald: PokemonTypeDetailNameIconItemDTO;
      'firered-leafgreen': PokemonTypeDetailNameIconItemDTO;
      'ruby-saphire': PokemonTypeDetailNameIconItemDTO;
      xd: PokemonTypeDetailNameIconItemDTO;
    };
    'generation-iv': {
      'diamond-pearl': PokemonTypeDetailNameIconItemDTO;
      'heartgold-soulsilver': PokemonTypeDetailNameIconItemDTO;
      platinum: PokemonTypeDetailNameIconItemDTO;
    };
    'generation-ix': {
      'scarlet-violet': PokemonTypeDetailNameIconItemDTO;
    };
    'generation-v': {
      'black-2-white-2': PokemonTypeDetailNameIconItemDTO;
      'black-white': PokemonTypeDetailNameIconItemDTO;
    };
    'generation-vi': {
      'omega-ruby-alpha-sapphire': PokemonTypeDetailNameIconItemDTO;
      'x-y': PokemonTypeDetailNameIconItemDTO;
    };
    'generation-vii': {
      'lets-go-pikachu-lets-go-eevee': PokemonTypeDetailNameIconItemDTO;
      'sun-moon': PokemonTypeDetailNameIconItemDTO;
      'ultra-sun-ultra-moon': PokemonTypeDetailNameIconItemDTO;
    };
    'generation-viii': {
      'brilliant-diamond-and-shining-pearl': PokemonTypeDetailNameIconItemDTO;
      'legends-arceus': PokemonTypeDetailNameIconItemDTO;
      'sword-shield': PokemonTypeDetailNameIconItemDTO;
    };
  };
}

export interface PokemonTypeDetailNameIconItemDTO {
  name_icon: string;
}

export interface PokemonTypeDetailDoubleDamageItemDTO {
  name: string;
  url: string;
}

export interface PokemonTypeDetailHalfDamageToItemDTO {
  name: string;
  url: string;
}

export interface PokemonTypeDetailNoDamageFromItemDTO {
  name: string;
  url: string;
}

export interface PokemonTypeDetailNoDamageToItemDTO {
  name: string;
  url: string;
}

export interface PokemonTypeDetailIndex {
  game_index: number;
  generation: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface PokemonTypeDetailNameItemDTO {
  language: Language;
  name: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface PokemonTypeDetailPokemonItemDTO {
  pokemon: Pokemon2;
  slot: number;
}

export interface Pokemon2 {
  name: string;
  url: string;
}
