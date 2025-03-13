

import Loader from '../Loader/Loader';
import HeroSection from '../HeroSection/HeroSection';
import Header from '../Header/Header';
import Markets from '../Markets/Markets';
import Trading from '../Trading/Trading';
import Fees from '../Fees/Fees';
import Security from '../Security/Security';
import Academy from '../Academy/Academy';
import Blog from '../Blog/Blog';
import Testimony from '../Testimony/Testimony';
import Faq from '../Faq/Faq';
import AppMobile from '../AppMobile/AppMobile';
import Footer from '../Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <Loader/>
            <Header/>
            <HeroSection/>
            <Markets/>
            <Trading/>
            <Fees/>
            <Security/>
            <Academy/>
            <Blog/>
            <Testimony/>
            <Faq/>
            <AppMobile/>
            <Footer/>
        </div>
    )
}

export default LandingPage
