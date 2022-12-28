import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactList from 'components/ContactList/ContactList';
import AddingContacts from 'components/AddingContacts/AddingContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = event => {
    event.preventDefault();
    const { name, number } = event.target;
    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    const info = contact.name + ' is already in contacts';
    this.checkAddContact(this.state.contacts, contact)
      ? Notify.failure(info)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));

    event.target.reset();
  };

  deleteContact = event => {
    const value = event.target.parentNode.firstChild.textContent;
    this.setState({
      contacts: this.state.contacts.filter(item => item.name !== value),
    });
  };

  checkAddContact = (contacts, newContact) => {
    return contacts.find(contact => contact.name === newContact.name);
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
      <div>
        <AddingContacts title="Name" handleAddContact={this.addContact} />
        <ContactList
          title="Contacts"
          contacts={filtred}
          handleDeleteContact={this.deleteContact}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}
