import { Movie } from '../../domain/Movie';
import MovieCard from '../MovieCard';
import { ListContainer, Content } from './styles';

export type MovieRowProps = {
  movies: Movie[];
  genre: string;
};

export default function MovieRow({ movies, genre }: MovieRowProps) {
  return (
    <Content>
      <h2>{genre}</h2>
      <ListContainer>
        {movies.map((e) => (
          <MovieCard movie={e} key={e.id} />
        ))}
      </ListContainer>
    </Content>
  );
}
