import axios from 'axios';
import { FETCH_NEWS, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from '../constants/news';

export function fetchNews(page = 0) {
  return (dispatch) =>  {
    return axios.get(`http://www.stellarbiotechnologies.com/media/press-releases/json?limit=10&offset=${(page * 10)}`)
    .then((response) => {
      dispatch(fetchNewsSuccess(response.data.news))
    })
    .catch((error) => {
      dispatch(fetchNewsFailure(error))
    });
  };
}

export function fetchNewsSuccess(news) {
  return {
    type: FETCH_NEWS_SUCCESS,
    news
  };
}

export function fetchNewsFailure() {
  return {
    type: FETCH_NEWS_FAILURE,
  };
}
