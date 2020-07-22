/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Placement from './placement';

const PlacementList = props => {
  const { placements } = props;
  return (
    <div>
      {
        placements.map(placement => (
          <Placement
            key={placement.id}
            organizationName={placement.organizations[0] ? placement.organizations[0].name : ''}
            organizationImage={placement.organizations[0] ? placement.organizations[0].picture : ''}
            type={placement.type}
            objective={placement.objective}
            remote={placement.remote}
            location={placement.locations[0]}
            deadline={placement.deadline}
            skills={placement.skills}
          />
        ))
    }
    </div>
  );
};

PlacementList.propTypes = {
  placements: PropTypes.array.isRequired,
};

export default PlacementList;
