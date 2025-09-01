import { PokemonController } from '@/@core/domains/controllers/pokemon.controller';
import { PokemonQueryParams } from '@/@core/domains/types/pokemon.type';
import { useInfiniteQuery } from '@tanstack/react-query';

const pokemonController = new PokemonController();

export const usePokemons = (limit = 20) => {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: async ({ pageParam = 1 }) => {
      const params: PokemonQueryParams = { page: pageParam, limit };
      return pokemonController.getAllPokemon(params);
    },
    getNextPageParam: (lastPage) => {
      const meta = lastPage.meta;
      if (!meta) return undefined;
      return meta.page < meta.total_pages ? meta.page + 1 : undefined;
    },
  });
};
