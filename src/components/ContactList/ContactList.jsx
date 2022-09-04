import { useSelector } from 'react-redux';
import { allContacts, filter } from '../../redux/contactsSlice';
import { Box } from '../Box';
import { ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(allContacts);
  const filterValue = useSelector(filter);

  const filteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
      {filteredContacts().map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact name={name} number={number} id={id} />
        </ContactItem>
      ))}
    </Box>
  );
};
