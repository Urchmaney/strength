/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Skills from './skills';
import { setTalent } from '../../actions/index';
import '../../index.css';

const Talent = props => {
  const {
    talent,
    setTalent,
    moveToSearchView,
  } = props;

  const handleSearchClick = () => {
    setTalent(talent);
    moveToSearchView();
  };

  return (
    <div className="talent">
      <div className="profile-container">
        <div className="profile">
          <img src={talent.picture} height="100" width="100" alt="profile" />
          <p>
            {talent.name}
          </p>
          <p>
            {talent.location}
          </p>
        </div>
        <div className="skill">
          <Skills skills={talent.skills} />
        </div>
      </div>
      <p>
        <button type="button" className="searchBtn" onClick={handleSearchClick}>
          search placements
        </button>
      </p>

    </div>
  );
};

Talent.propTypes = {
  talent: PropTypes.object.isRequired,
  moveToSearchView: PropTypes.func,
  setTalent: PropTypes.func,
};

Talent.defaultProps = {
  moveToSearchView: () => { },
  setTalent: () => { },
};

const mapDispatchToProps = dispatch => ({
  setTalent: talent => dispatch(setTalent(talent)),
});

export default connect(null, mapDispatchToProps)(Talent);
