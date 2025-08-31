export type PokemonListItemDTO = {
  name: string;
  url: string;
};

export type PokemonListResponseDTO = {
  count: number;
  next?: string;
  previous?: string;
  results: Array<PokemonListItemDTO>;
};
