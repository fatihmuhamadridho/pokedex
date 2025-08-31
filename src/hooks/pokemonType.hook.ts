import { PokemonTypeController } from '@/@core/domains/controllers/pokemonType.controller';
import { useQuery } from '@tanstack/react-query';

const pokemonTypeController = new PokemonTypeController();

export const usePokemonTypes = () => {
  return useQuery({
    queryKey: ['pokemon_type'],
    queryFn: () => pokemonTypeController.getAllPokemonType(),
  });
};
