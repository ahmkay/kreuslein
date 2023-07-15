import logo from './logo.svg';
import { Typography, Paper, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Link, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ResponsiveAppBar from './ResponsiveAppBar';

import './App.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      {/* <AppBar position='relative' className='appbar'>
        <Toolbar className='navbar'>
          <HomeIcon />
          <Typography variant='h6'>Notar Kreuslein</Typography>
          <Button className="navButton" variant="contained" size="small">Online Terminvereinbarung</Button>
        </Toolbar>
      </AppBar> */}
      <main>
        <div>
          <Container maxWidth="md" className="container" /*sx={{width: 300,backgroundColor: 'success.main',}}*/>
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Notariat Kreußlein
            </Typography>
            <Typography variant='body1' align='center' color="textSecondary" paragraph>
              Der Notar bekleidet ein öffentliches Amt und ist zur Neutralität verpflichtet. Er fungiert als unparteiischer Berater in kom­plizierten und folgenreichen Rechtsangelegenheiten.
              Er trägt dafür Sorge, dass Sie die rechtliche Tragweite Ihrer abgegebenen Erklärungen und Ihres Handelns verstehen.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Contact
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Contact
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Card sx={{ maxWidth: 250 }}>
              <CardContent>
                <Typography variant="h5" component="div">Card</Typography>
                <Typography variant="body1">Anleitung zum Unglücklichsein</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size="small" color="primary">Edit</Button>
              </CardActions>
            </Card>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} className='serviceGrid'>
                <Grid item xs={12} sm={4} md={4} id="opt1" className='serviceOption'>
                <Link href="#">
                  <div className='serviceOptionInner'>
                    <Typography variant="body1" className='serviceGridTitle'>Immobilien</Typography>
                  </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4} id="opt2" className='serviceOption'>
                <Link href="#">
                  <div className='serviceOptionInner'>
                    <Typography variant="body1" className='serviceGridTitle'>Erbschaft</Typography>
                  </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4} id="opt3" className='serviceOption'>
                <Link href="#">
                  <div className='serviceOptionInner'>
                    <Typography variant="body1" className='serviceGridTitle'>Karriere</Typography>
                  </div>
                  </Link>
                </Grid>
              </Grid>
            </Box>



          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
