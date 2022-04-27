import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import SelectField from '../../../../components/Form-Control/SelectField';
import DatePicker from '../../../../components/Form-Control/DatePicker';
import './style.scss';
import { Button, FormControl } from '@mui/material';
import SliderField from '../../../../components/Form-Control/SliderField';
SearchForm.propTypes = {
    onSubmit: PropTypes.func,
};

function SearchForm(props) {
    const form = useForm({
        defaultValues: {
            SelectCity: 'DN',
            DatePicker: new Date("2022-05-01"),
            SelectDuration: '1',
            Adults: "1",
            Childrens:"0",
            Rooms:"1",
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
        4:"4 đêm"
    }
    const handleSubmit = (values) => {
        console.log('test', values);
    }
    return (

            
        <form className='SearchForm' onSubmit={form.handleSubmit(handleSubmit)}>
                    <SelectField name="SelectCity" data={city} label='Thành Phố' form={form} />
                
                
                        <DatePicker name="DatePicker" label='Date' form={form} />
                
                    <SelectField name='SelectDuration' data={date} label='Số Đêm' form={form} />
               
               <SliderField name='Adults' label='Adults' max={30} form={form}/>
               <SliderField name='Childrens' label='Childrens' max={6} form={form}/>
               <SliderField name='Rooms' label='Rooms' max ={8}form={form}/>
                <button className="Button">Search Hotels</button>
        </form>
            
    );
}

export default SearchForm;