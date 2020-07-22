import {
  SET_TALENT,
  SET_PLACEMENT,
  SET_PLACEMENTS,
  SET_TALENTS,
} from '../helpers/constants';

const setTalent = talent => ({
  type: SET_TALENT,
  talent,
});

const setPlacement = placemet => ({
  type: SET_PLACEMENT,
  placemet,
});

const setTalents = talents => ({
  type: SET_TALENTS,
  talents,
});

const setPlacements = placements => ({
  type: SET_PLACEMENTS,
  placements,
});

export {
  setTalent,
  setPlacement,
  setPlacements,
  setTalents,
};
