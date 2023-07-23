import logo from '../logo.svg';
import { Typography, Paper, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Link, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import Contactform from './Contactform';
import '../App.css';

const Contact = () => {
  return (
    <div className="App">

      <main>

      <Container maxWidth="md" className="container" id="kontakt">
                        <Typography variant='h1' className='sectionTitle'>
                            Kontakt
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Für eine schnelle Abwicklung ihrer Angelegenheit können Sie ganz einfach mit uns Kontakt aufnehmen.
                        </Typography>
                        <Contactform />
                        <Typography variant='body1' paragraph>
                            Oder kommen Sie uns direkt vor Ort besuchen.
                        </Typography>
                        <Box className="contactMap">
                            <div className='mapouterBody'>
                                <iframe className='mapFrame' src="https://maps.google.com/maps?width=990&amp;height=440&amp;hl=en&amp;q=Prenzlauer%20Str.%2011%2C%2016515%20Oranienburg+(Notare%20Holland%20%26%20Kreu%C3%9Flein)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                <div className='mapInnerBody'>
                                    <small className='mapSmall'>Powered by <a href="https://embedgooglemaps.com/ru/">embed googlemaps ru</a> & <a href="https://sms-lån-som-beviljar-alla.se/">sms lån som beviljar alla</a>
                                    </small>
                                </div>
                            </div><br />

                        </Box>
                    </Container>

      </main >
    </div >
  );
}

export default Contact;