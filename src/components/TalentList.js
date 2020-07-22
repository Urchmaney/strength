import React, { useEffect, useState } from 'react';
import Talent from './presentational/Talent';
import {
  getTalents,
} from '../helpers/apiCall';

const TalentList = () => {
  const [talents, setTalents] = useState([]);
  useEffect(() => {
    (async () => {
      const talents = (await getTalents(2, 5)).results;
      setTalents(talents);
    })();
  });
  return (
    <div>
      {
        talents.map(talent => (
          <Talent
            key={talent.subjectId}
            name={talent.name}
            image={talent.picture}
            skills={talent.skills}
            location={talent.locationName}
          />
        ))
      }
    </div>
  );
};

export default TalentList;
