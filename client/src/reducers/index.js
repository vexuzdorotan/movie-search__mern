import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import searchMovieReducer from './searchMovieReducer';
import favoriteMovieReducer from './favoriteMovieReducer';
import jumbotronReducer from './jumbotronReducer';

export default combineReducers({
  auth: authReducer,
  searchMovie: searchMovieReducer,
  favoriteMovie: favoriteMovieReducer,
  form: formReducer,
  jumbotron: jumbotronReducer,
});
