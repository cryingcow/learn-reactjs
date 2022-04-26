import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { MenuItem, OutlinedInput, Select } from '@mui/material';
import './style.scss';

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    lable: PropTypes.string,
};

function SelectField(props) {
    const { form, name, data } = props;
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => (
                <Select
                    fullWidth
                    {...field}>

                    {
                        Object.entries(data).map(([key, value], i) =>
                            <MenuItem style={{
                                display: 'block',
                                padding: 10,
                            }} key={i} value={key}>{value}</MenuItem>)
                    }
                </Select>)}

        />
    );
}

export default SelectField;