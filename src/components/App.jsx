import { useDispatch, useSelector } from 'react-redux';
import { contactAdded } from '../redux/contactsSlice';
import { allContacts } from '../redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import { Title, TitleContact, Section } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(allContacts);

  const addContact = ({ name, number }) => {
    contacts.find(contact => contact.name === name)
      ? Notify.info(`${name} is already in contacts`, {
          position: 'center-top',
          fontSize: '20px',
          width: '450px',
          borderRadius: '4px',
          closeButton: true,
          info: {
            background: '#000000',
            color: '#ffffff',
            notiflixIconColor: 'rgba(225,225,225,0.5)',
          },
        })
      : dispatch(contactAdded(name, number));
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactList />
    </Section>
  );
};
