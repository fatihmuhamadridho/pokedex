/* eslint-disable @typescript-eslint/no-explicit-any */

export type PokemonQueryParamsDTO = {
  limit?: number;
  offset?: number;
};

export type PokemonQueryParams = {
  page?: number;
  limit?: number;
};

export type PokemonDetailQueryParams = {
  search?: string | number;
};

export type PokemonListResponseDTO = {
  count: number;
  next?: string;
  previous?: string;
  results: Array<PokemonListItemDTO>;
};

export type PokemonListItemDTO = {
  name: string;
  url: string;
};

// DETAIL POKEMON

export interface PokemonDetailResponseDTO {
  abilities: PokemonAbilityItemDTO[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: PokemonFormItemDTO[];
  game_indices: PokemonIndexItemDTO[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMoveItemDTO[];
  name: string;
  order: number;
  past_abilities: PokemonPastAbilityItemDTO[];
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: any;
    back_shiny: string;
    back_shiny_female: any;
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
    other: {
      dream_world: {
        front_default: string;
        front_female: any;
      };
      home: {
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
      showdown: {
        back_default: string;
        back_female: any;
        back_shiny: string;
        back_shiny_female: any;
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
    };
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      'generation-ii': {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      'generation-iii': {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        'firered-leafgreen': {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        'ruby-sapphire': {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      'generation-iv': {
        'diamond-pearl': {
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
        'heartgold-soulsilver': {
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
        platinum: {
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      'generation-v': {
        'black-white': {
          animated: {
            back_default: string;
            back_female: any;
            back_shiny: string;
            back_shiny_female: any;
            front_default: string;
            front_female: any;
            front_shiny: string;
            front_shiny_female: any;
          };
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
        'x-y': {
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      'generation-vii': {
        icons: {
          front_default: string;
          front_female: any;
        };
        'ultra-sun-ultra-moon': {
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      'generation-viii': {
        icons: {
          front_default: string;
          front_female: any;
        };
      };
    };
  };
  stats: PokemonStatsItemDTO[];
  types: PokemonTypeItemDTO[];
  weight: number;
}

export interface PokemonAbilityItemDTO {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonFormItemDTO {
  name: string;
  url: string;
}

export interface PokemonIndexItemDTO {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface PokemonMoveItemDTO {
  move: {
    name: string;
    url: string;
  };
  version_group_details: PokemonVersionGroupItemDTO[];
}

export interface PokemonVersionGroupItemDTO {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  order?: number;
  version_group: {
    name: string;
    url: string;
  };
}

export interface PokemonPastAbilityItemDTO {
  abilities: PokemonAbility3ItemDTO[];
  generation: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility3ItemDTO {
  ability: any;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonStatsItemDTO {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonTypeItemDTO {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
