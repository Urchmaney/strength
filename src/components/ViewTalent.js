/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Talent from './presentational/talent';
import PlacementList from './presentational/placementList';
import Header from './presentational/header';
import Footer from './presentational/footer';
import { getOppurtunities } from '../helpers/service';

class ViewTalent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      placements: [],
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.gotoPage = this.gotoPage.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    (async () => {
      const newPlacements = (await getOppurtunities((page - 1) * 10, 10)).results;
      this.setState({
        page,
        placements: newPlacements,
      });
    })();
  }

  async incrementPage() {
    const { page } = this.state;
    (async () => {
      const newPlacements = (await getOppurtunities((page) * 10, 10)).results;
      this.setState({
        page: page + 1,
        placements: newPlacements,
      });
    })();
  }

  async gotoPage(pageNumber) {
    if (pageNumber > 0) {
      (async () => {
        const newPlacements = (await getOppurtunities((pageNumber - 1) * 10, 10)).results;
        this.setState({
          page: Number(pageNumber),
          placements: newPlacements,
        });
      })();
    }
  }

  async decrementPage() {
    const { page } = this.state;
    if (page > 1) {
      (async () => {
        const newPlacements = (await getOppurtunities((page - 2) * 10, 10)).results;
        this.setState({
          page: page - 1,
          placements: newPlacements,
        });
      })();
    }
  }

  render() {
    const { talent } = this.props;
    const { placements, page } = this.state;
    return (
      <div>
        <Header />
        <Talent talent={talent} />
        <PlacementList placements={placements} />
        <Footer
          page={page}
          onIncrementClick={this.incrementPage}
          onDecrementClick={this.decrementPage}
          onSubmitPageNumber={this.gotoPage}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  talent: state.talent,
});

ViewTalent.propTypes = {
  talent: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ViewTalent);
