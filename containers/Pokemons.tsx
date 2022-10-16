import { useQuery } from '@tanstack/react-query';
import { HTMLAttributes } from 'react';
import { Generation as Pokemons } from '../types/generation';

interface PokemonsProps extends HTMLAttributes<HTMLDivElement> {
  url: string;
}

async function fetchGeneration(url: string) {
  return (await (await fetch(url)).json()) as Pokemons;
}

function Pokemons(props: PokemonsProps) {
  const { url } = props;
  const { data } = useQuery(['generation', url], () => fetchGeneration(url));

  return (
    <div>
      <input type="text" name="search" />

      {data?.pokemon_species?.map?.((pokemon) => (
        <div key={pokemon.name}>
          <button>{pokemon.name}</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Pokemons;
