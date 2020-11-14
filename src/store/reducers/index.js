import {combineReducers} from 'redux';
import {Profile} from './Profile';
import {Authorization} from './Authorization';
import {Main} from './Main';
import {History} from './History';

const rootReducer = combineReducers({
  Profile,
  Authorization,
  Main,
  History,
});

export default rootReducer;
