import PropTypes from 'prop-types';
import { getFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { Box } from 'components/Box';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Box mb={3}>
      <Label>
        Find contact by name
        <Input type="text" value={filterValue} onChange={e => dispatch(changeFilter(e.target.value))} />
      </Label>
    </Box>
  );
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
