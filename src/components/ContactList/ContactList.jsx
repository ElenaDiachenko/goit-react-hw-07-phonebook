import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { Box } from '../Box';
import { ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from '../../redux/contactsApiSlice';
import ClipLoader from 'react-spinners/ClipLoader';

export const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);
  const normalizedFilter = filterValue.toLowerCase();

  const filterContacts = () => {
    if (!contacts) return;
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContacts = filterContacts();

  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
      {isLoading && (
        <Box display="flex" justifyContent="center" mt={20}>
          <ClipLoader color="#000000" size={30} />
        </Box>
      )}
      {error && <p>Something went wrong/ Try again later</p>}

      {contacts && !isLoading && filteredContacts.length > 0
        ? filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id}>
              <Contact name={name} phone={phone} id={id} />
            </ContactItem>
          ))
        : null}
      {!contacts && !isLoading && filteredContacts.length <= 0 ? <p>Missing contacts!</p> : null}
    </Box>
  );
};
