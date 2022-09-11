import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Label, Input, Message } from './ContactForm.styled';
import ClipLoader from 'react-spinners/ClipLoader';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is Required')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name is not valid'),
  phone: yup
    .string()
    .required('This field is Required')
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number is not valid'),
});

const initialValues = {
  name: '',
  phone: '',
};
export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => {
        return (
          <Form>
            <Label>
              Name
              <Input type="text" name="name" />
              <Message name="name" component="span" />
            </Label>

            <Label>
              Number
              <Input type="tel" name="phone" />
              <Message name="phone" component="span" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              {!isSubmitting && 'Add contact'}
              {isSubmitting && <ClipLoader color="#ffffff" size={12} />}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
