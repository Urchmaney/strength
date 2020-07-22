/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Skills from './skills';

const Talent = props => {
  const {
    name,
    skills,
    location,
    image,
  } = props;

  return (
    <div>
      <img src={image} height="100" width="100" alt="profile" />
      <p>
        {name}
      </p>
      <p>
        {location}
      </p>
      <Skills skills={skills} />
    </div>
  );
};

Talent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  skills: PropTypes.any,
  location: PropTypes.string.isRequired,
};

Talent.defaultProps = {
  skills: [],
};

export default Talent;
