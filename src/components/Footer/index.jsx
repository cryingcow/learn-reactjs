import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Container, Grid, Link } from '@mui/material';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer>
                <Box px={{xs:3, sm:10}}
                py={{xs:5,sm:10}}
                 bgcolor="#0770cd" color="white">
                    <Container maxWidth="lg">
                        <Grid container spacing={5}>
                            <Grid  item xs={12} sm={4}>
                                <Box borderBottom={1}>Help</Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        Contact
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        Support
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        Privacy
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid  item xs={12} sm={4}>
                                <Box borderBottom={1}>Account</Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        Login
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        Register
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid  item xs={12} sm={4}>
                                <Box borderBottom={1}>Messages</Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        Backup
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        History
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" underline="none" color="inherit">
                                        Roll
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box textAlign="center" pt={{sx:5,sm:10}} pb={{xs:5,sm:0}}>
                            Material UI Workshop &reg; {new Date().getFullYear()}
                        </Box>
                    </Container>
                </Box>
        </footer>
    );
}

export default Footer;