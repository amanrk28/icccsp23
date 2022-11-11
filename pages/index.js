import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import HomeSection from '../components/Home';
import Conference from '../components/Conference';
import Committee from '../components/Committee';
import CallForPaper from '../components/CallForPaper';
// import Submission from '../components/Submission';
import Speakers from '../components/Speakers';
import Authors from '../components/Authors';
import Registrations from '../components/Registrations';
import Archive from '../components/Archive';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';
import Workshop from '../components/Workshop';
import PaymentDetails from '../components/PaymentDetails';

export default function Home() {
  return (
    <>
      <Head>
        <title>ICCCSP 2023</title>
        <meta
          name="description"
          content="The 7th International Conference on Computer, Communication and Signal Processing 2023 (ICCCSP '23) has been planned to highlight the rapidly developing technologies related to Artificial Intelligence (AI), Knowledge Engineering and IoT for Smart Systems."
        />
        <link rel="icon" href="https://icccsp.com/img/ssn1.png" />
      </Head>
      <NavBar />
      <HomeSection />
      <Conference />
      <ImportantDates />
      <CallForPaper />
      {/* <Submission /> */}
      <Committee />
      <Archive />
      <Workshop />
      <Speakers />
      <Authors />
      <Registrations />
      <PaymentDetails />
      <Contact />
      <Footer />
    </>
  );
}
