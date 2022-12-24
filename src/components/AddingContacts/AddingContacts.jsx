import PropTypes from 'prop-types';
import css from './AddingContacts.module.css';
const AddingContacts = ({ title, handleAddContact }) => {
  return (
    <div>
      <form onSubmit={handleAddContact}>
        <h2>{title}</h2>
        <label>
          <input
            className={css.AddFormInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <br />
        </label>
        <label>
          <input
            className={css.AddFormInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <br />
        </label>
        <button className={css.AddFormBtn}>Add</button>
      </form>
    </div>
  );
};
AddingContacts.propTypes = {
  title: PropTypes.string,
  handleAddContact: PropTypes.func,
};
export default AddingContacts;
