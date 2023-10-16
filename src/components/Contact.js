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
                        <iframe width="100%" height="400px" frameBorder="0" allowFullScreen src="//umap.openstreetmap.de/de/map/notar-kreuslein-holland_47149?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=none&captionBar=false&datalayers=184102"></iframe>
                        </Box>
                    </Container>

      </main >
    </div >
  );
}

export default Contact;