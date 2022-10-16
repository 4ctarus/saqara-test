import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { SelectedGenerationContext } from '../pages';
import { Generation } from '../types/generation';

async function fetchGeneration(url: string) {
  return (await (await fetch(url)).json()) as Generation;
}

function Generation() {
  const selectedGenerationState = useContext(SelectedGenerationContext);
  const url = selectedGenerationState?.[0]?.url;

  const { data } = useQuery(
    ['generation', url],
    () => fetchGeneration(url as string),
    {
      enabled: !!url,
    }
  );

  return (
    <>
      <input type="text" name="search" />

      {data?.pokemon_species?.map?.((pokemon) => (
        <div key={pokemon.name}>
          <button>{pokemon.name}</button>
          <br />
        </div>
      ))}
    </>
  );
}

export default Generation;
