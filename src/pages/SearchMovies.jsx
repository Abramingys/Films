import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';
import { getApiUrl, useFetch } from '../hooks/useFetch';
import { addToHistory } from '../redux/slices/historySlice';

export default function SearchMovies() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('keyword');
  const { data, error } = useFetch(getApiUrl(`/films?keyword=${searchName}`));

  useEffect(() => {
    if (searchName) {
      dispatch(addToHistory(searchName));
    }
  }, [dispatch, searchName]);

  if (error || !data) {
    return <Loader />;
  }

  return <Movies films={data.items} error={error} />;
}
