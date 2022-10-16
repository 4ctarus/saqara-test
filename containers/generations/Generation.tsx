import { useQuery } from '@tanstack/react-query';
import { HTMLAttributes } from 'react';
import { Generation } from '../../types/generation';
import { fetcher } from '../../utils/fetcher';

interface GenerationProps extends HTMLAttributes<HTMLDivElement> {
  url: string;
}

function Generation({ url }: GenerationProps) {
  const { data } = useQuery([url], fetcher<Generation>);

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.pokemon_species?.map?.((pokemon) => (
        <div
          key={pokemon.name}
          className="max-w-5xl p-4 text-center rounded-md bg-surface-variant text-on-surface-variant text-body"
        >
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}

export default Generation;
