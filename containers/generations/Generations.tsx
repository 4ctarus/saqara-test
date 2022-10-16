import { Tab } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ResourceList } from '../../types/resourceList';
import { fetcher } from '../../utils/fetcher';
import Generation from './Generation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Generations() {
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1280px)');

    setIsLaptop(mql.matches);

    const handler = (evt: MediaQueryListEvent) => {
      setIsLaptop(evt.matches);
    };

    mql.addEventListener('change', handler);

    return () => {
      mql.removeEventListener('change', handler);
    };
  }, []);

  const { data } = useQuery(
    ['https://pokeapi.co/api/v2/generation/'],
    fetcher<ResourceList>
  );

  return (
    <div className="flex flex-col gap-4 p-4">
      <Tab.Group vertical={!isLaptop}>
        <Tab.List className="flex flex-col gap-2 xl:flex-row xl:justify-center">
          {data?.results?.map?.((generation) => (
            <Tab
              key={generation.name}
              className={({ selected }) =>
                classNames(
                  'flex h-10 items-center justify-center rounded-full px-4 text-title',
                  selected
                    ? 'bg-primary-container hover:bg-primary/[0.24] focus:bg-primary/[0.28] dark:bg-primary-container-dark dark:hover:bg-primary-dark/[0.24] dark:focus:bg-primary-dark/[0.28]'
                    : 'text-on-surface hover:bg-on-surface/[0.08]  focus:bg-on-surface/[0.12] dark:text-on-surface-dark dark:hover:bg-on-surface-dark/[0.08] dark:focus:bg-on-surface-dark/[0.12]'
                )
              }
            >
              {generation.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {data?.results?.map?.((generation) => (
            <Tab.Panel key={generation.name}>
              <Generation url={generation.url} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Generations;
