import { useState } from 'react';
import { Movie } from '../../domain/Movie';
import MovieCard from '../MovieCard';
import { ListContainer, Content, ButtonLeft, ButtonRight } from './styles';

export type MovieRowProps = {
  movies: Movie[];
  genre: string;
};

export default function MovieRow({ movies, genre }: MovieRowProps) {
  const [margin, setMargin] = useState(0);
  const moveRight = () => {
    if (margin < -2400) return;
    const updatedMargin = margin - 300;
    setMargin(updatedMargin);
  };

  const moveLeft = () => {
    if (margin > -300) return;

    const updatedMargin = margin + 300;
    setMargin(updatedMargin);
  };

  return (
    <Content>
      <h2>{genre}</h2>
      <ListContainer margin={margin}>
        <ButtonLeft onClick={moveLeft}>{'<'}</ButtonLeft>

        {movies.map((e) => (
          <MovieCard movie={e} key={e.id} />
        ))}
        <ButtonRight onClick={moveRight}>{'>'}</ButtonRight>
      </ListContainer>
    </Content>
  );
}
