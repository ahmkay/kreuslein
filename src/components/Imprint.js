import logo from '../logo.svg';
import { Typography, Paper, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Link, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import Contactform from './Contactform';
import '../App.css';

const Imprint = () => {
  return (
    <div className="App">

      <main>

        <Container maxWidth="md" className="container serviceContainer">
          <Typography variant='h1' className='sectionTitle'>Impressum</Typography>

          <Typography variant='h2' className='sectionTitle3 marginTop'>Angaben gemäß § 5 TMG</Typography>
          <Typography variant='body1' className='sectionText'>
            Notar Dr. Matthias Kreußlein<br />
            Prenzlauer Straße 11<br />
            16515 Oranienburg<br />
          </Typography>
          <Typography variant='body1' className='sectionText'>USt.-ID: DE 273791713</Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Kontakt</Typography>
          <Typography variant='body1' className='sectionText'>Telefon: 03301/801138</Typography>
          <Typography variant='body1' className='sectionText'>E-Mail: info@holland-kreusslein.de</Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Aufsichtsbehörde</Typography>
          <Typography variant='body1' className='sectionText'>
          Präsident des Landgerichts Neuruppin<br />
          Feldmannstraße 1<br />
          16816 Neuruppin
          </Typography>
          <Typography variant='body1' className='sectionText'>
            Oberlandesgericht Brandenburg<br />
            Gertrud-Piter-Platz 11<br />
            14770 Brandenburg an der Havel<br /> 
          </Typography>
          <Typography variant='body1' className='sectionText'>
          Ministerium der Justiz<br />
          Heinrich-Mann-Allee 107<br />
          14473 Potsdam<br /> 
          Tel: (0331) 866-0<br /> 
          Fax: (0331) 866-3080/3081<br /> 
          E-Mail: poststelle@mdje.brandenburg.de<br /> 
          </Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Berufsbezeichnung und besondere berufliche Regelungen</Typography>
          <Typography variant='body1' className='sectionText'>
          Berufsbezeichnung: Notar<br /><br />
          Kammer: Notarkammer des Landes Brandenburg<br />
          Dortustraße 71, 14467 Potsdam
          </Typography>
          <Typography variant='body1' className='sectionText'>
          Verliehen in: Bundesrepublik Deutschland
          </Typography>
          <Typography variant='body1' className='sectionText'>
          Der Berufsstand Notar / Notarin unterliegt den unter https://www.notar.de/der-notar/berufsrecht genannten berufsrechtlichen Regelungen.
          </Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</Typography>
          <Typography variant='body1' className='sectionText'>
          Matthias Sören Holland & Dr. Matthias Kreußlein  
          </Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Streitschlichtung</Typography>
          <Typography variant='body1' className='sectionText'>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Haftung für Inhalte</Typography>
          <Typography variant='body1' className='sectionText'>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Haftung für Links</Typography>
          <Typography variant='body1' className='sectionText'>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>Urheberrecht</Typography>
          <Typography variant='body1' className='sectionText'>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </Typography>


        </Container>

      </main >
    </div >
  );
}

export default Imprint;