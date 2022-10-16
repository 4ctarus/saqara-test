import type { NextPage } from 'next';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Generation from '../containers/Generation';
import Generations from '../containers/Generations';
import { Ressource } from '../types/ressource';

export const SelectedGenerationContext = createContext<
  [Ressource | null, Dispatch<SetStateAction<Ressource | null>>] | null
>(null);

const Home: NextPage = () => {
  const selectedGeneration = useState<Ressource | null>(null);

  return (
    <SelectedGenerationContext.Provider value={selectedGeneration}>
      <Generations />
      <Generation />
    </SelectedGenerationContext.Provider>
  );
};

export default Home;
