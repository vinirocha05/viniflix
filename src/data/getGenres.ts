import { API_KEY, BASE_URL } from '../config/config';
import { fetchJson } from '../utils/fecthJson';

export const getGenres = async () => {
  const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
  const genres = await fetchJson(url);
  return genres;
};
