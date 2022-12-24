import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactList from 'components/ContactList/ContactList';
import AddingContacts from 'components/AddingContacts/AddingContacts';
import css from './Phonebook.module.css';

let INITIAL_STATE = {
  contacts: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class Phonebook extends Component {
  state = INITIAL_STATE;

  addContact = event => {
    event.preventDefault();
    const { name, number } = event.target;
    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    const info = contact.name + ' is already in contacts';
    this.checkAddContact(INITIAL_STATE.contacts, contact)
      ? INITIAL_STATE.contacts.push(contact)
      : Notify.failure(info);

    event.target.reset();
    this.setState(INITIAL_STATE);
  };

  deleteContact = event => {
    const value = event.target.parentNode.firstChild.textContent;

    INITIAL_STATE.contacts = INITIAL_STATE.contacts.filter(
      item => item.name !== value
    );

    this.setState(INITIAL_STATE);
  };

  checkAddContact = (contacts, newContact) => {
    for (const contact of contacts) {
      console.log(contact.name, newContact.name);
      if (contact.name === newContact.name) {
        return false;
      } else {
        return true;
      }
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedCase)
    );
  };
  render() {
    const filtred = this.filteredContacts();
    return (
      <div className={css.phonebook}>
        <AddingContacts
          title="Name"
          handleAddContact={this.addContact}
        ></AddingContacts>
        <ContactList
          title="Contacts"
          contacts={filtred}
          handleDeleteContact={this.deleteContact}
          changeFilter={this.changeFilter}
        ></ContactList>
      </div>
    );
  }
}

export default Phonebook;
