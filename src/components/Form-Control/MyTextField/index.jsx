import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { InputNumber } from 'antd';
import 'antd/dist/antd.css';

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
        render={({field }) => 
            <InputNumber {...field}
            />}
        />
    );
    
}

export default MyTextField;