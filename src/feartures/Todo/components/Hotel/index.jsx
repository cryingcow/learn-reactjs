import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import './style.scss';

Hotel.propTypes = {
  data: PropTypes.array.isRequired,
};
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
  export default function Hotel(props) {
    const { data} = props;
    return (
      <div className='Hotel-List'>
        {data.map((v, i) => <div key={i} className='Hotel-Item'> <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={v.Url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {v.Name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {v.Place}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {v.Title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Đặt phòng
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {v.Price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper></div>)}
      </div>
    );
  }