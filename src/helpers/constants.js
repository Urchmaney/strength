const SINGLE_TALENT_URL = username => `https://torre.bio/api/bios/${username}`;
const SINGLE_OPPURTUNITY_URL = id => `https://torre.co/api/opportunities/${id}`;
const SEARCH_TALENTS_URL = (offset, size, aggregate = false) => `https://search.torre.co/people/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`;
const SEARCH_OPPURTUNITY_URL = (offset, size, aggregate = false) => `https://search.torre.co/opportunities/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`;

const SET_TALENT = 'SET_TALENT';
const SET_PLACEMENT = 'SET_PLACEMENT';
const SET_PLACEMENTS = 'SET_PLACEMENTS';
const SET_TALENTS = 'SET_TALENTS';

export {
  SEARCH_OPPURTUNITY_URL,
  SEARCH_TALENTS_URL,
  SINGLE_OPPURTUNITY_URL,
  SINGLE_TALENT_URL,
  SET_TALENT,
  SET_PLACEMENT,
  SET_PLACEMENTS,
  SET_TALENTS,
};
