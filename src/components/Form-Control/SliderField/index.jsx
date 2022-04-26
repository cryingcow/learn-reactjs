import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Slider } from '@mui/material';

SliderField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    max: PropTypes.number,
    label: PropTypes.string,
};

function SliderField(props) {
    const {form, name, max, label} = props;
    console.log(label)
    return (
        <>
        <label>{label}</label>
        <Controller
        name={name}
        control={form.control}
        render={({ field }) => <Slider 
        defaultValue={1}
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={max}
        {...field} 
        />}
        />
</>
    );
}

export default SliderField;