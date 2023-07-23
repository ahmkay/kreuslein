import logo from '../logo.svg';
import { Typography, Paper, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Link, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import Contactform from './Contactform';
import '../App.css';

const Info = () => {
  return (
    <div className="App">

      <main>

      <Container maxWidth="md" className="container serviceContainer">
                    <Typography variant='h2' className='sectionTitle'>Unsere Tätigkeitsfelder</Typography>

                    <Grid container justifyContent="center" spacing={2} className='modalServiceGrid'>
                        <Grid item sm={12} md={6}>
                            <Typography variant='body1' className='sectionText'>
                            Infothek für Neugierige: Für alle, die sich täglich rund um Steuern, Wirtschaft und Recht informieren möchten, bieten wir interessante Nachrichten in der Infothek an.
                            <br /><br />
                            Formulare: Für Sie steht das passende Formular bereit, damit Sie Ihre Anliegen unkompliziert an uns übermitteln können mit allen benötigten Informationen.
                            <br /><br />
                            Interessante Links zum Weiterlesen: Wenn Sie noch mehr Informationen rund um Steuerthemen suchen, können die Links aus dieser Sammlung relevant für Sie sein. Steuerkalender zur Übersicht: Damit Sie keine wichtigen steuerlichen Termine mehr verpassen, bieten wir Ihnen in jedem Jahr einen aktuellen Kalender an, der alle Deadlines für die verschiedenen Steuern enthält.
                            <br /><br />
                            Steuerkalender zur Übersicht: Damit Sie keine wichtigen steuerlichen Termine mehr verpassen, bieten wir Ihnen in jedem Jahr einen aktuellen Kalender an, der alle Deadlines für die verschiedenen Steuern enthält.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <img src="info-back.jpg" className='gridImage' />
                        </Grid>
                    </Grid>


                </Container>

      </main >
    </div >
  );
}

export default Info;