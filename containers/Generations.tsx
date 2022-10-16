import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { SelectedGenerationContext } from '../pages';
import { Ressource } from '../types/ressource';
import { RessourceList } from '../types/ressourceList';

const fetchGenerations = async () => {
  return (await (
    await fetch('https://pokeapi.co/api/v2/generation/')
  ).json()) as RessourceList;
};

function Generations() {
  const { data } = useQuery(['generations'], () => fetchGenerations());
  const selectedGenerationState = useContext(SelectedGenerationContext);

  function onClick(res: Ressource) {
    if (selectedGenerationState) {
      const [, setSelectedGeneration] = selectedGenerationState;
      setSelectedGeneration(res);
    }
  }

  return (
    <div>
      {data?.results?.map?.((generation) => (
        <div key={generation.name}>
          <button onClick={() => onClick(generation)}>{generation.name}</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Generations;
