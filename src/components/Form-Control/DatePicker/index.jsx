import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
DatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
};

function DatePicker(props) {
    const { form, name ,label} = props;
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                    name={name}
                    control={form.control}
                    render={({ field: { ref, ...rest } }) => (
                        <KeyboardDatePicker
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            margin="normal"
                            label={label}
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                            {...rest}
                        />
                    )}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default DatePicker;