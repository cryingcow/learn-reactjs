import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import SelectField from '../../../../components/Form-Control/SelectField';
import DatePicker from '../../../../components/Form-Control/DatePicker';
import './style.scss';
import { Box, Button, Container, FormControl, Grid, InputLabel } from '@mui/material';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Slideshow from '../../../../components/Slideshow';
import MyTextField from '../../../../components/Form-Control/MyTextField';
SearchForm.propTypes = {
    onSubmit: PropTypes.func,
};

function SearchForm(props) {
    const form = useForm({
        defaultValues: {
            SelectCity: 'DN',
            DatePicker: new Date("2022-05-01"),
            SelectDuration: '1',
            Childrens:0,
            Rooms:1,
            Adults:1,
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

        <>
      <Slideshow />
         
        <form className='SearchForm' onSubmit={form.handleSubmit(handleSubmit)}>
            <Box>
                <Container  >

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="flex-end" >
                    <Grid item xs={6}>

                    <SelectField name="SelectCity" data={city} label='Thành Phố' form={form} />
                
                
                
               
                    </Grid>
                    <Grid item xs={6}>
                    <SelectField name='SelectDuration' data={date} label='Số Đêm' form={form} />
                    </Grid>
                    <Grid item  xs ={6}>

<DatePicker name="DatePicker" label='Date' form={form} />
</Grid>
                    <Grid item xs={6}>
                    <Container>
                        <Grid container rowSpacing={0.5} columnSpacing={1}>
                            <Grid xs={12}>
                            <InputLabel>Khách và Phòng</InputLabel>
                            </Grid>
                            <Grid item xs={3}>
                            <span>Adults</span><MyTextField name="Adults" form={form}/>

                            </Grid>
                            <Grid item xs={3}>
                            <span>Childrens</span><MyTextField name="Childrens" form={form}/>
                                
                            </Grid>
                            <Grid item xs={3}>
                            <span>Rooms</span><MyTextField name="Rooms" form={form}/>
                                
                            </Grid>

                        </Grid>
                    </Container>

                    </Grid>
                    
                <Link to="/listHotel" > <button type="submit"className="btn">Search Hotels</button></Link>
                
            
                </Grid>
                </Container>
            </Box>
        </form>
        </>  
    );
}

export default SearchForm;