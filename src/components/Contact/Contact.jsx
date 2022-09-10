import PropTypes from 'prop-types';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

export const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ContactName>{name} :</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DeleteButton onClick={() => deleteContact(id)} disabled={isLoading}>
        Delete
      </DeleteButton>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
