import PropTypes from 'prop-types';
// import { contactDelete } from 'redux/contactsSlice';
// import { useDispatch } from 'react-redux';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';

export const Contact = ({ id, name, phone }) => {
  // const dispatch = useDispatch();

  return (
    <>
      <ContactName>{name} :</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DeleteButton>Delete</DeleteButton>
      {/* <DeleteButton onClick={() => dispatch(contactDelete({ id }))}>Delete</DeleteButton> */}
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
