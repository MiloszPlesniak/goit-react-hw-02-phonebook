import PropTypes from 'prop-types';

const SearchFilter = ({ changeFilter }) => {
  return <input type="text" name="Search" onChange={changeFilter} />;
};

SearchFilter.propTypes = {
  changeFilter: PropTypes.func
};

export default SearchFilter;
