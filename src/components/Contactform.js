import * as React from 'react';
import { Box, TextField, Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { pink } from '@mui/material/colors';

export default function Contactform() {
    return (
        <Box className="contactWrapper">
            <Box className="contactFormTop">
                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>

                    <Grid item xs={12} sm={4}>
                        <Box className="contactTopItem">
                            <a href="mailto:info@notar-kreusslein.de">
                                <MailOutlineIcon className='contactTopIcon' />
                                <p className='contactTopText'>info@notar-kreusslein.de</p>
                            </a>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box className="contactTopItem">
                            <a href="https://goo.gl/maps/rX1UDiJypT1uJF9WA" target="_blank">
                                <LocationOnOutlinedIcon className='contactTopIcon' />
                                <p className='contactTopText'>Prenzlauer Straße 11<br />16515 Oranienburg</p>
                            </a>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box className="contactTopItem">
                            <a href="tel:+0493301801138">
                                <LocalPhoneOutlinedIcon className='contactTopIcon' />
                                <p className='contactTopText'>03301 - 801138</p>
                            </a>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box component="form" noValidate autoComplete="on" className='contactBottomWrapper'>

                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>
                    <Grid item xs={12} sm={6}>
                        <TextField type="text" id="vorname" label="Vorname*" variant="filled" className='contactInput' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField type="text" id="nachname" label="Nachname*" variant="filled" className='contactInput' />
                    </Grid>
                </Grid>

                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>
                    <Grid item xs={12} sm={6}>
                        <TextField type="email" id="email" label="Email*" variant="filled" className='contactInput' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField type="tel" id="telefon" label="Telefon" variant="filled" className='contactInput' />
                    </Grid>
                </Grid>

                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>
                    <Grid item xs={12} sm={12}>
                        <TextField id="nachricht" label="Ihre Nachricht an uns" multiline rows={4} variant="filled" className='contactInput' />
                    </Grid>
                </Grid>

                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid' id="contactFormBottomControls">
                    <Grid item xs={12} sm={8}>
                        <FormControlLabel control={<Checkbox sx={{color: '#9AAFB7','&.Mui-checked': {color: '#9AAFB7',},}}/>} label="Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der Datenschutzerklärung einverstanden.*" id="contactCheckbox" />                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Button variant='contained' color='primary' className='contactFormBtn' type="submit">Absenden</Button>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}