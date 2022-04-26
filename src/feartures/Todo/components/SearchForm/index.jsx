import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import SelectField from '../../../../components/Form-Control/SelectField';
import DatePicker from '../../../../components/Form-Control/DatePicker';
import './style.scss';

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
};

function SearchForm(props) {
    const form = useForm({
        defaultValues: {
            SelectCity: 'DN',
            DatePicker: new Date("2022-05-01"),
            SelectDuration: '1'
        },
    });
    const city = {
        DN: "Đà Nẵng",
        HCM: "TP.HCM",
        HA: "Hội An",
        HN: "Hà Nội",
        BR: "Bà Rịa Vũng Tàu",
        H: "Huế",
    }
    const date = {
        1: "1 đêm",
        2: "2 đêm",
        3: "3 đêm",
    }
    const handleSubmit = (values) => {
        console.log('test', values);
    }
    return (

        <form className='SearchForm' onSubmit={form.handleSubmit(handleSubmit)}>
            <div className='container'>
                <div className='row'>
                    <SelectField name="SelectCity" lable='place' data={city} form={form} />
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <DatePicker name="DatePicker" form={form} />
                    </div>
                    <div className='col-md-4'>
                        <SelectField name='SelectDuration' data={date} lable='Duration' form={form} />
                    </div>
                    <div className='col-md-2'>

                    </div>
                </div>
                <button className="Button">Search Hotels</button>
            </div>
        </form>
    );
}

export default SearchForm;