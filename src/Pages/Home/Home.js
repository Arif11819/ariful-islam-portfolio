import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Footer from './Footer/Footer';
import Logo from './Logo/Logo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Logo></Logo>
            <About></About> <br /> <hr />
            <Footer></Footer>
        </div>
    );
};

export default Home;