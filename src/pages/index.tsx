import { GetStaticProps } from 'next';
import Home from '../container/Home';
import { getMovies } from '../data/getMoviesByGenre';
import { Movie } from '../domain/Movie';

export type HomeProps = {
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
export default function App({ movies }: HomeProps) {
  return <Home movies={movies} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const horror = await getMovies('27');
  const documentary = await getMovies('99');
  const action = await getMovies('28');
  const adventure = await getMovies('12');
  const comedy = await getMovies('35');
  const drama = await getMovies('18');
  const romance = await getMovies('10749');

  const movies = {
    horror,
    documentary,
    action,
    adventure,
    comedy,
    drama,
    romance,
  };

  return {
    props: { movies },
  };
};
