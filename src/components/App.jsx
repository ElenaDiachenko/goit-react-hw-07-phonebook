import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import { Title, TitleContact, Section } from './App.styled';
import { useGetContactsQuery, useAddContactMutation } from '../redux/contactsApiSlice';
const options = {
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
};
export const App = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleAddContact = async values => {
    console.log(Object.values(values));

    if (contacts.find(contact => contact.name === values.name)) {
      Notify.info(`${values.name} is already in contacts`, options);
      return;
    }
    try {
      await addContact(values);
      // toast.success('Contact added successfully');
    } catch (error) {
      // toast.error('Error adding contact');
      console.log(error);
    }
  };
  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleAddContact} />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactList />
    </Section>
  );
};
