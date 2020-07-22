/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Home = props => (
  <div className="App">
    <header className="App-header">
      <div className="home-container">
        <div className="home-button" onClick={() => props.history.push('/talents')} role="presentation">
          Talents
        </div>
        <div className="home-button">
          Company
        </div>
      </div>
    </header>
  </div>
);

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
