import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";
import css from './App.module.css';

export class App extends Component { 
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };
  
  onInputChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };
  onSubmitContact = contact => {
    const { contacts } = this.state;
    const newContact = { ...contact, id: nanoid() }
    this.setState({
      contacts: [...contacts, newContact]
    });
  };
  deleteContact = contactID => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== contactID) });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.body}>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.wrapper}>
          <ContactForm contacts={contacts} onSubmitContact={this.onSubmitContact} />
          <div className={css.contacts}>
            <h2 className={css.contactsTitle} >Contacts</h2>
            <Filter filter={filter} onInputChangeFilter={this.onInputChangeFilter} />
            <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact} />
          </div>
        </div>
      </div>
    );
}
}
