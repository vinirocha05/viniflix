import { API_KEY, BASE_URL } from '../config/config';
import { GetByGenre } from '../domain/getByGenre';
import { Movie } from '../domain/Movie';
import { fetchJson } from '../utils/fecthJson';

export const getMovies = async (genre: string): Promise<Movie[]> => {
  const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
  const movies = await fetchJson<GetByGenre>(url);
  return movies.results;
};
