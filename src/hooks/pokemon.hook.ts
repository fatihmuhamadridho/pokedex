import { PokemonController } from '@/@core/domains/controllers/pokemon.controller';
import { useQuery } from '@tanstack/react-query';

const pokemonController = new PokemonController();

export const usePokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: () => pokemonController.getAllPokemon(),
  });
};
