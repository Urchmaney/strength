import {
  SEARCH_OPPURTUNITY_URL,
  SEARCH_TALENTS_URL,
  SINGLE_OPPURTUNITY_URL,
  SINGLE_TALENT_URL,
} from './constants';

const get = url => fetch(url, {
  method: 'GET',
}).then(res => res.json());

const post = url => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}).then(result => result.json());

const getTalents = async (offset, size) => {
  const url = SEARCH_TALENTS_URL(offset, size);
  const talents = await post(url);
  return talents;
};

const getSingleTalent = async name => {
  const url = SINGLE_TALENT_URL(name);
  const talent = await get(url);
  return talent;
};

const getOppurtunities = async (offset, size) => {
  const url = SEARCH_OPPURTUNITY_URL(offset, size);
  const oppurtunities = await post(url);
  return oppurtunities;
};

const getSingleOppurtunity = async id => {
  const url = SINGLE_OPPURTUNITY_URL(id);
  const oppurtunity = await get(url);
  return oppurtunity;
};

export {
  getOppurtunities,
  getSingleOppurtunity,
  getSingleTalent,
  getTalents,
};
