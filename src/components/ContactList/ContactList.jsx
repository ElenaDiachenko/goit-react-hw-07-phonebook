// import { useSelector } from 'react-redux';
// import { allContacts, filter } from '../../redux/contactsSlice';
import { Box } from '../Box';
import { ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from '../../redux/contactsSlice';

export const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  console.log(contacts);
  console.log(error);
  console.log(isLoading);

  // const contacts = useGetContactsQuery();
  // const contacts = useSelector(allContacts);
  // const filterValue = useSelector(filter);

  // const filteredContacts = () => {
  //   const normalizedFilter = filterValue.toLowerCase();

  //   return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  // };
  // if (contacts.length < 0) return <div>Missing contacts!</div>;
  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
      {isLoading && <div>Loading...</div>}
      {error && <p>Something went wrong/ Try again later</p>}
      {contacts &&
        contacts.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <Contact name={name} phone={phone} id={id} />
          </ContactItem>
        ))}
    </Box>
  );
};
