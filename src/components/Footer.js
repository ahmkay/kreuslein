import * as React from 'react';
import { Box, TextField, Grid, FormControlLabel, Checkbox, Button, Container, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { pink } from '@mui/material/colors';

export default function Footer() {
    return (
        <Box className="Footer">
            <Container maxWidth="md" className="container FooterContainer">
                <Box className="FooterLeft">                
                    <Typography variant='h5' className='FooterTitle'>Notariat Kreußlein</Typography>                    
                </Box>
                <Box className="FooterRight">
                    <a href="/" style={{ textDecoration: 'none' }} className='FooterLink'>Startseite</a>
                    <a href="/Kontakt" style={{ textDecoration: 'none' }} className='FooterLink'>Kontakt</a>
                    <a href="/Impressum" style={{ textDecoration: 'none' }} className='FooterLink'>Impressum</a>
                    <a href="/Datenschutz" style={{ textDecoration: 'none' }} className='FooterLink'>Datenschutz</a>
                    {/* <a href="/Sicherheit" style={{ textDecoration: 'none' }} className='FooterLink'>Sicherheit</a> */}
                </Box>
            </Container>

        </Box>
    );
}