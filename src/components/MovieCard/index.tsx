import { Movie } from '../../domain/Movie';
import { Container } from './styles';

export type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w154/`;

  return (
    <Container>
      <img src={`${imageUrl}${movie.poster_path}`} />
    </Container>
  );
}
