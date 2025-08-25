import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import TRG11 from './assets/app/trg11.png';
import TRG06 from './assets/app/trg06.jpg';
import TRG02 from './assets/app/trg02.png';
import TRG21 from './assets/app/trg21.png';
import TRG15 from './assets/app/trg15.png';
import TRG09 from './assets/app/trg09.png';
import TRG07 from './assets/app/trg07.png';
import TRG17 from './assets/app/trg17.png';
import TRG03 from './assets/app/trg03.png';
import TRG10 from './assets/app/trg10.png';
import TRG08 from './assets/app/trg08.png';

import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Intent Studios ltd" className="logo-img" />
                <span className="studio-name">Intent Studios ltd</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: '3D Phone Case DIY: Makeover',
      image: TRG11,
      link: 'https://play.google.com/store/apps/details?id=com.tripsoft.phone.diy.design.makeover'
    },
    {
      name: 'Bus Jam: Traffic Puzzle',
      image: TRG06,
      link: 'https://play.google.com/store/apps/details?id=com.busjame.puzzlegame'
    },
    {
      name: 'DIY Boba Tea Drink Game',
      image: TRG02,
      link: 'https://play.google.com/store/apps/details?id=com.apero.bobatea.diy.drinkgame'
    },
    {
      name: 'Funny Soundboard & AR',
      image: TRG21,
      link: 'https://play.google.com/store/apps/details?id=com.casual.sound.board.ar'
    },
    {
      name: 'Goods Sorting: Triple Match 3D',
      image: TRG15,
      link: 'https://play.google.com/store/apps/details?id=com.mkj.trg15.goods.puzzle'
    },
    {
      name: 'Gun Simulator - Real Gun',
      image: TRG09,
      link: 'https://play.google.com/store/apps/details?id=com.gun.realgun.shot.sound.realistic'
    },
    {
      name: 'Home Design: Decor & Makeover',
      image: TRG07,
      link: 'https://play.google.com/store/apps/details?id=com.decor.homedecor.life.homedesign'
    },
    {
      name: 'Magic Water Sort: Bloom Puzzle',
      image: TRG17,
      link: 'https://play.google.com/store/apps/details?id=com.puzzle.color.water.sort'
    },
    {
      name: 'Merge Master: Funny Drop',
      image: TRG03,
      link: 'https://play.google.com/store/apps/details?id=com.puzzle.merge.fruit.master'
    },
    {
      name: 'Perfect Slime DIY: ASMR Game',
      image: TRG10,
      link: 'https://play.google.com/store/apps/details?id=com.tripsoft.perfect.slime.diy.asmr.game'
    },
    {
      name: 'Relax & Play: Mini Game Fun',
      image: TRG08,
      link: 'https://play.google.com/store/apps/details?id=com.calm.relax.minigame'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Intent Studios ltd</h2>
            <p className="about-text">Intent Studios Ltd is a creative game development studio offering a wide variety of fun and engaging mobile games. From relaxing DIY and ASMR experiences to challenging puzzles, exciting simulations, and entertaining AR apps, we design games that bring joy and creativity to players of all ages. Our titles range from makeover and design games to traffic puzzles, sorting challenges, and interactive soundboards – ensuring there’s always something fun to play for everyone.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:alishaikh095@gmail.com">alishaikh095@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              🏠 Hoang Mai
                Ha Noi - 100000
                Vietnam (VN)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Intent Studios ltd. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
