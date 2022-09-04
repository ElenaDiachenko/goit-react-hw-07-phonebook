import PropTypes from 'prop-types';
import { contactDelete } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactName>{name} :</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton onClick={() => dispatch(contactDelete({ id }))}>
        Delete
      </DeleteButton>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
