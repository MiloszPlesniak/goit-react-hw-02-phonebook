import PropTypes from 'prop-types';

const ListElement = ({ contactsData, handleDeleteContact }) => {
  return contactsData.map(item => (
    <li key={item.id}>
      <span>{item.name}</span>
      <span> {item.number}</span>{' '}
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  ));
};

ListElement.propTypes = {
  contactsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteContact:PropTypes.func
};
export default ListElement;
