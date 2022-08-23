import Header from '../../components/Header';
import { Movie } from '../../domain/Movie';

export type MovieProps = {
  movies: {
    horror: Movie[];
    documentary: Movie[];
    action: Movie[];
    adventure: Movie[];
    comedy: Movie[];
    drama: Movie[];
    romance: Movie[];
  };
};

export default function Home({ movies }: MovieProps) {
  return (
    <>
      <Header />
    </>
  );
}
