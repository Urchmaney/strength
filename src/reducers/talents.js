import { SET_TALENTS } from '../helpers/constants';

const talents = (state = [], action) => {
  switch (action.type) {
    case SET_TALENTS:
      return action.talents;
    default:
      return state;
  }
};

export default talents;
