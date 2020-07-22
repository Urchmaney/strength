import { combineReducers } from 'redux';
import talent from './talent';
import placement from './placement';
import talents from './talents';
import placements from './placements';

const rootReducer = combineReducers({
  talent, placement, talents, placements,
});

export default rootReducer;
