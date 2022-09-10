// import { useSelector } from 'react-redux';
// import { allContacts, filter } from '../../redux/contactsSlice';
import { Box } from '../Box';
import { ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from '../../redux/contactsSlice';

export const ContactList = () => {
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  // console.log(contacts);
  // console.log(error);
  // console.log(isFetching);

  // const contacts = useGetContactsQuery();
  // const contacts = useSelector(allContacts);
  // const filterValue = useSelector(filter);

  // const filteredContacts = () => {
  //   const normalizedFilter = filterValue.toLowerCase();

  //   return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  // };

  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <Contact name={name} phone={phone} id={id} />
        </ContactItem>
      ))}
    </Box>
  );
};
