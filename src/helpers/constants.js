const SINGLE_TALENT_URL = username => `https://torre.bio/api/bios/${username}`;
const SINGLE_OPPURTUNITY_URL = id => `https://torre.co/api/opportunities/${id}`;
const SEARCH_TALENTS_URL = (offset, size, aggregate = false) => `https://search.torre.co/people/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`;
const SEARCH_OPPURTUNITY_URL = (offset, size, aggregate = false) => `https://search.torre.co/opportunities/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`;

export {
  SEARCH_OPPURTUNITY_URL,
  SEARCH_TALENTS_URL,
  SINGLE_OPPURTUNITY_URL,
  SINGLE_TALENT_URL,
};
