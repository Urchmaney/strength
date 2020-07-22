import { SET_PLACEMENTS } from '../helpers/constants';

const placements = (state = [], action) => {
  switch (action.type) {
    case SET_PLACEMENTS:
      return action.placements;
    default:
      return state;
  }
};

export default placements;
