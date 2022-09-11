import PropTypes from 'prop-types';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';
import { useDeleteContactMutation } from '../../redux/contactsApiSlice';
import ClipLoader from 'react-spinners/ClipLoader';

export const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ContactName>{name} :</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DeleteButton onClick={() => deleteContact(id)} disabled={isLoading}>
        {!isLoading && 'Delete'}
        {isLoading && <ClipLoader color="#ffffff" size={12} />}
      </DeleteButton>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
