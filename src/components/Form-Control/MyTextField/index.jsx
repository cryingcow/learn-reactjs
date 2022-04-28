import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IDInput from '../../../feartures/Todo/components/IDInput';

MyTextField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
};

function MyTextField(props) {
    const {name, form} = props;
    return (
        <Controller
        name={name}
        control={form.control}
        render={({field: {value,onChange}}) => 
            <IDInput
            value={value}
            onChange={onChange}
            
            />
        }
        />
    );
    
}

export default MyTextField;