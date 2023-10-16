import logo from '../logo.svg';
import { Typography, Paper, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Link, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import Contactform from './Contactform';
import ModalImmo from './ModalImmo';
import ModalUntern from './ModalUntern';
import ModalErbrecht from './ModalErbrecht';
import ModalFamilie from './ModalFamilie';
import '../App.css';

function App() {
    return (
        <div className="App">
            <main>
                <div>
                    <Box className="heroWrapper">
                        <Box className='heroWrapperLayer'></Box>
                        <Container maxWidth="md" className="containerHero" /*sx={{width: 300,backgroundColor: 'success.main',}}*/>
                            <Box className="HeroBox">
                                <img src="Logo-small-transparent2.png" className='HeroLogo' />
                                <Typography variant='h1' align='center' color="textPrimary" gutterBottom>
                                    Notariat Kreußlein
                                </Typography>
                                <Typography variant='body1' align='center' color="textSecondary" paragraph>
                                    Beglaubigung und Beurkundung Ihrer Dokumente einfach online
                                </Typography>
                                <div>
                                            <Button href="/#kontakt" variant='contained' color='primary' className='heroCTA'>
                                                Termin vereinbaren
                                            </Button>
                                </div>
                            </Box>


                        </Container>
                    </Box>

                    

<Box className="mainWrapper">
                    <Container maxWidth="md" className="container serviceContainer">
                        <Typography variant='h2' className='sectionTitle'>Unsere Leistungen</Typography>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <div className='servOptItem'>
                                <ModalImmo />
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className='servOptItem'>
                                <ModalFamilie />
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className='servOptItem'>
                                    <ModalUntern />
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className='servOptItem'>
                                <ModalErbrecht />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>

                    <Box className="bannerSection">
                        <Container maxWidth="md" className="container">
                            <Box className="textBox">
                                <Grid container justifyContent="center" spacing={0}>

                                    <Grid item xs={12} sm={8}>
                                        <Box className="textBoxInner">
                                            <Typography variant='h3' className='subtitleH3'>Wir heißen Sie herzlich willkommen in unserem Notariat</Typography>
                                            <Typography variant='body1'>Der Notar bekleidet ein öffentliches Amt und ist zur Neutralität verpflichtet. Er fungiert als unparteiischer Berater in kom­plizierten und folgenreichen Rechtsangelegenheiten. Er trägt dafür Sorge, dass Sie die rechtliche Tragweite Ihrer abgegebenen Erklärungen und Ihres Handelns verstehen.</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Box className="textBoxImageInner">
                                            <img src="siegel.jpg" className='textboxImage' />
                                            <Box className="textboxImageLayer"></Box>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Container>
                    </Box>

                    <Container maxWidth="md" className="container" id="kontakt">
                        <Typography variant='h2' className='sectionTitle'>
                            Kontakt
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Für eine schnelle Abwicklung ihrer Angelegenheit können Sie ganz einfach mit uns Kontakt aufnehmen.
                        </Typography>
                        <Contactform />
                        <br /><br />
                        <Typography variant='body1' paragraph>
                            Oder kommen Sie uns direkt vor Ort besuchen.
                        </Typography>
                        <Box className="contactMap">
                        <iframe width="100%" height="500px" frameborder="0" allowfullscreen src="//umap.openstreetmap.de/de/map/notar-kreuslein-holland_47149?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false"></iframe>
                        </Box>
                
                    </Container>

                    </Box>

                </div>
            </main >
        </div >
    );
}

export default App;