import PropTypes from 'prop-types';

//Css

import './page-header.css';

const PageHeader = ({ headerText }) => {
  return (
    <section className='header-page'>
      <h2 className='header-text'>{headerText}</h2>
    </section>
  );
};

PageHeader.propTypes = {
  headerText: PropTypes.string,
};

export default PageHeader;
