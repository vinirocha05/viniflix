import Header from '../../components/Header';
import HightLight from '../../components/Highlight';
import MovieRow from '../../components/MovieRow';

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
      <HightLight movie={movies.action[2]} />
      <MovieRow movies={movies.horror} genre="Horror" />
      <MovieRow movies={movies.documentary} genre="Documentary" />
      <MovieRow movies={movies.action} genre="Action" />
      <MovieRow movies={movies.adventure} genre="Adventure" />
      <MovieRow movies={movies.comedy} genre="Comedy" />
      <MovieRow movies={movies.drama} genre="Drama" />
      <MovieRow movies={movies.romance} genre="Romance" />
    </>
  );
}
