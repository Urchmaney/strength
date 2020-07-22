/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TalentList from './presentational/talentList';
import Header from './presentational/header';
import Footer from './presentational/footer';
import { getTalents, getOppurtunities } from '../helpers/service';
import { setTalents, setPlacements } from '../actions/index';

class TalentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      talents: [],
    };
    this.moveToSearchView = this.moveToSearchView.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.gotoPage = this.gotoPage.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    (async () => {
      const newtalents = (await getTalents((page - 1) * 10, 10)).results;
      this.setState({
        page,
        talents: newtalents,
      });
    })();
  }

  async incrementPage() {
    const { page } = this.state;
    (async () => {
      const newTalents = (await getTalents((page) * 10, 10)).results;
      this.setState({
        page: page + 1,
        talents: newTalents,
      });
    })();
  }

  async gotoPage(pageNumber) {
    if (pageNumber > 0) {
      (async () => {
        const newtalents = (await getTalents((pageNumber - 1) * 10, 10)).results;
        this.setState({
          page: Number(pageNumber),
          talents: newtalents,
        });
      })();
    }
  }

  async decrementPage() {
    const { page } = this.state;
    if (page > 1) {
      (async () => {
        const newTalents = (await getTalents((page - 2) * 10, 10)).results;
        this.setState({
          page: page - 1,
          talents: newTalents,
        });
      })();
    }
  }

  async moveToSearchView() {
    const { history, setPlacements } = this.props;
    const placements = (await getOppurtunities(0, 10)).results;
    setPlacements(placements);
    history.push('/view');
  }

  render() {
    const { page, talents } = this.state;
    return (
      <div>
        <Header />
        <TalentList
          moveToSearchView={this.moveToSearchView}
          onViewAppClick={this.moveToAppliedView}
          talents={talents}
        />
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

const mapDispatchToProps = dispatch => ({
  setTalents: talents => dispatch(setTalents(talents)),
  setPlacements: placements => dispatch(setPlacements(placements)),
});

const mapStateToProps = state => ({
  talents: state.talents,
});

TalentDashboard.propTypes = {
  setPlacements: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TalentDashboard);
