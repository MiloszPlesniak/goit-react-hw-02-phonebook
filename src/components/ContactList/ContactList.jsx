import ListElement from 'components/ListElement/ListElement';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import PropTypes from 'prop-types';
const ContactList = ({
  title,
  contacts,
  handleDeleteContact,
  changeFilter,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <SearchFilter changeFilter={changeFilter}></SearchFilter>
      <ul>
        <ListElement
          contactsData={contacts}
          handleDeleteContact={handleDeleteContact}
        ></ListElement>
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteContact: PropTypes.func,
};
export default ContactList;
