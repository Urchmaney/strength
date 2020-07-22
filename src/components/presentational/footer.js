import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  const {
    onIncrementClick,
    onSubmitPageNumber,
    page,
    onDecrementClick,
  } = props;

  const [pageNo, setPageNo] = useState(page);
  const onPageNumberSubmit = () => {
    onSubmitPageNumber(pageNo);
  };
  return (
    <footer>
      <button type="button" className="left-arrow" onClick={onDecrementClick}>
        &lt;
      </button>
      <span className="f-middle">
        <span>
          page--
          {page}
        </span>
        <input type="number" onChange={e => { setPageNo(e.target.value); }} />
        <button type="submit" onClick={onPageNumberSubmit}>go</button>
      </span>
      <button type="button" className="right-arrow" onClick={onIncrementClick}>
        &gt;
      </button>
    </footer>
  );
};

Footer.propTypes = {
  onIncrementClick: PropTypes.func,
  onSubmitPageNumber: PropTypes.func,
  onDecrementClick: PropTypes.func,
  page: PropTypes.number,
};

Footer.defaultProps = {
  onIncrementClick: () => { },
  onDecrementClick: () => {},
  onSubmitPageNumber: () => { },
  page: 1,
};

export default Footer;
