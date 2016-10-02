import Immutable from 'immutable';
import { FETCH_NEWS, FETCH_NEWS_FAILURE, FETCH_NEWS_SUCCESS } from '../constants/news';

const initialState = {
  loading: false,
  finishedLoading: false,
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, loading: true };
    case FETCH_NEWS_SUCCESS:
      if (action.news.length === 0) {
        return { ...state, finishedLoading: true};
      }
      return { ...state, news: state.news.concat(action.news), loading: false};
    case FETCH_NEWS_FAILURE:
      return state;
    default:
      return state;
  }
}
