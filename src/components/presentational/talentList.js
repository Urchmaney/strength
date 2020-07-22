/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Talent from './talent';

const TalentList = props => {
  const {
    talents,
    moveToAppliedView,
    moveToSearchView,
  } = props;
  return (
    <div>
      {
        talents.map(talent => (
          <Talent
            key={talent.subjectId}
            moveToAppliedView={moveToAppliedView}
            moveToSearchView={moveToSearchView}
            talent={talent}
          />
        ))
      }
    </div>
  );
};

TalentList.propTypes = {
  talents: PropTypes.array.isRequired,
  moveToAppliedView: PropTypes.func,
  moveToSearchView: PropTypes.func,
};

TalentList.defaultProps = {
  moveToAppliedView: () => {},
  moveToSearchView: () => {},
};

export default TalentList;
