import logo from '../logo.svg';
import { Typography, Paper, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Link, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import Contactform from './Contactform';
import '../App.css';

const Services = () => {
    return (
        <div className="App">

            <main>

                <Container maxWidth="md" className="container serviceContainer">
                    <Typography variant='h1' className='sectionTitle'>Unsere Tätigkeitsfelder</Typography>

                    <Grid container justifyContent="center" spacing={2} className='modalServiceGrid'>
                        <Grid item sm={12} md={6}>
                            <Typography variant='body1' className='sectionText'>
                                Im Mittelpunkt der Aufmerksamkeit des Notars steht immer der Mensch. Denn ebenso wichtig wie äußerste Genauigkeit und fundiertes Wissen ist Verständnis für Ihre Anliegen, Sorgen und Nöte.<br />
                                <br />
                                Notarinnen und Notare sind zuständig für Beurkundungen jeder Art sowie für die Beglaubigung von Unterschriften, Handzeichen und Abschriften. Für eine Vielzahl von Rechtsgeschäften ist die Beurkundung durch einen Notar sogar gesetzlich vorgeschrieben. Dies ist immer dort der Fall, wo der Gesetzgeber die Mithilfe des Notars wegen der weitreichenden persönlichen und wirtschaftlichen Folgen für die Beteiligten für geboten hält.Notare errichten vollstreckbare <a href="https://www.bnotk.de/Notar/Urkunde/index.php">Urkunden</a>. Aus ihnen findet wie aus für vollstreckbar erklärten gerichtlichen Endurteilen die Zwangsvollstreckung statt. Auch sind Schiedssprüche nur vollstreckbar, wenn sie von einem staatlichen Gericht oder einem Notar für vollstreckbar erklärt wurden.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <img src="service-back.jpg" className='gridImage' />
                        </Grid>
                    </Grid>


                    <Grid container justifyContent="center" spacing={2} className='marginTop'>
                        <Grid item sm={12} md={6}>
                            <Typography variant='h3' className='sectionTitle3'>Unsere Tätigkeitsfelder</Typography>
                            <Typography variant='body1' className='sectionText'>
                                <ul className='list'>
                                    <li><a href="/TAeTIGKEITSFELDER/IMMOBILIEN" class="cm_anchor">Immobilien</a></li>
                                    <li><a href="/TAeTIGKEITSFELDER/SCHENKEN" class="cm_anchor">Schenken</a></li>
                                    <li><a href="/TAeTIGKEITSFELDER/UNTERNEHMEN-GRUeNDEN" class="cm_anchor">Unternehmen &amp; Gründung</a></li>
                                    <li><a href="/TAeTIGKEITSFELDER/NOTFALLVORSORGE" class="cm_anchor">Notfallversorgung</a></li>
                                    <li><a href="/TAeTIGKEITSFELDER/VERERBEN" class="cm_anchor">Vererben</a></li>
                                    <li><a href="/TAeTIGKEITSFELDER/EHE,-PARTNERSCHAFT-FAMILIE" class="cm_anchor">Ehe &amp; Partnerschaft</a></li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography variant='h3' className='sectionTitle3'>Vorsorgende Rechtspflege</Typography>
                            <Typography variant='body1' className='sectionText'>
                                Notarinnen und Notare sind auf dem Gebiet der vorsorgenden Rechtspflege tätig. Sie sind wie Richter staatlich bestellt, unabhängig, unparteilich und Träger eines öffentlichen Amtes. Im Gegensatz zur streitigen Justiz kümmern sich Notarinnen und Notare jedoch um Streitvermeidung und sichere Vertragsgestaltung im Vorfeld. Notarinnen und Notare stehen Ihnen und Ihren Vertragspartnern als verschwiegener Berater in komplizierten und folgenreichen Rechtsangelegenheiten zur Verfügung.</Typography>
                        </Grid>
                    </Grid>


                    <Grid container justifyContent="center" spacing={2} className='marginTop'>
                        <Grid item sm={12} md={6}>
                            <Typography variant='h3' className='sectionTitle3'>Höchste Qualität</Typography>
                            <Typography variant='body1' className='sectionText'>
                            Notarinnen und Notare verbinden höchste juristische Ansprüche mit einem Berufsethos, der von Neutralität und der Würde eines öffentlichen Amtes geprägt ist. <br /><br />
                            Zum Notar werden nur besonders qualifizierte und erfahrene Volljuristen bestellt, deren Urkunden für Rechtssicherheit, Rechtsfrieden und Schutz des Unerfahrenen sorgen.</Typography>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography variant='h3' className='sectionTitle3'>Gleichmäßiger Zugang</Typography>
                            <Typography variant='body1' className='sectionText'>
                            Der hoheitliche Charakter der Notartätigkeiten verbürgt nicht nur erstklassige vorsorgende Rechtspflege, sondern auch einen gleichmäßigen Zugang zur juristischen Beratung. Das Gerichts- und Notarkostengesetz (GNotKG) sieht ein besonders soziales Gebührensystem vor: Jeder kann sich seinen Notar leisten, weil dessen Kosten sich nach dem Wert der Transaktion richten. Die einer Beurkundung vorausgehende Beratung einschließlich Entwurfsfertigungen sind mit der Beurkundungs­gebühr abgegolten. Dabei kommt es nicht darauf an, wie viel Zeit sich die Notarin oder der Notar genommen hat.</Typography>
                        </Grid>
                    </Grid>



                </Container>

            </main >
        </div >
    );
}

export default Services;