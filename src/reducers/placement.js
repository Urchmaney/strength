import { SET_PLACEMENT } from '../helpers/constants';

const placement = (state = {}, action) => {
  switch (action.type) {
    case SET_PLACEMENT:
      return action.placement;
    default:
      return state;
  }
};

export default placement;
