/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { calculateOppurtunityFitness } from '../../helpers/service';
import '../../index.css';

const Placement = props => {
  const {
    organizationName,
    organizationImage,
    type,
    objective,
    remote,
    location,
    deadline,
    skills,
    talent,
  } = props;
  return (
    <div className="placement">
      <div className="placement-container">
        <div>
          <img src={organizationImage} alt="organization" height="100" width="100" />
          <p>
            {organizationName}
          </p>
        </div>
        <div>
          <h3>{objective}</h3>
          <p>{type}</p>
          <p>
            {location}
            <span>
              remote:
              {remote}
            </span>
          </p>
          <p>
            {deadline}
          </p>
        </div>
      </div>
      <div className="percentage-display">
        {calculateOppurtunityFitness(talent.skills, skills)}
        %
      </div>
    </div>
  );
};

Placement.propTypes = {
  organizationName: PropTypes.string.isRequired,
  organizationImage: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  objective: PropTypes.string.isRequired,
  remote: PropTypes.bool.isRequired,
  location: PropTypes.string,
  deadline: PropTypes.string,
  skills: PropTypes.array,
  talent: PropTypes.object,
};

Placement.defaultProps = {
  location: '',
  deadline: '',
  skills: [],
  talent: {},
};

const mapStateToProps = state => ({
  talent: state.talent,
});

export default connect(mapStateToProps)(Placement);
