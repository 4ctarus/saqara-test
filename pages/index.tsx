import type { NextPage } from 'next';
import { FaBeer } from 'react-icons/fa';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-display">Hello world!</h1>
      <Button>tyzevfzeyuvf</Button>
      <Button prefixIcon={<FaBeer />}>tyzevfzeyuvf</Button>
      <Button suffixIcon={<FaBeer />}>tyzevfzeyuvf</Button>
      <Button icon={<FaBeer />} />
    </>
  );
};

export default Home;
