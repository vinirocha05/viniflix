import { Movie } from '../../domain/Movie';
import {
  Container,
  Details,
  GradientFromBottom,
  GradientFromRight,
} from './styles';

export type HightLightProps = {
  movie: Movie;
};

export default function HightLight({ movie }: HightLightProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w780/`;

  return (
    <Container>
      <Details>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <span>{movie.vote_average}</span>
      </Details>
      <img src={`${imageUrl}${movie.backdrop_path}`} />
      <GradientFromBottom />
      <GradientFromRight />
    </Container>
  );
}
