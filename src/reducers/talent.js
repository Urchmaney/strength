import { SET_TALENT } from '../helpers/constants';

const talent = (state = {}, action) => {
  switch (action.type) {
    case SET_TALENT:
      return action.talent;
    default:
      return state;
  }
};

export default talent;
