import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <img src="../Assets/mile1-assets/home-banner.png" alt="" />
      <div className="header">
      
        <h1>Teknolojik Yemekler</h1>
        <h2>KOD ACIKTIRIR PIZZA, DOYURUR</h2>
        <Link to="/order">
          <button className="cta-button">ACIKTIM</button>
        </Link>
      </div>

      <div className="menu-section">
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="../Assets/mile2-aseets/pictures/food-1.png" alt="Terminal Pizza" className="menu-image" />
            <p>Terminal Pizza</p>
            <p>60₺</p>
          </div>
          <div className="menu-item">
            <img src = "../Assets/mile2-aseets/pictures/food-2.png" alt="Position Absolute Acı Pizza" className="menu-image" />
            <p>Position Absolute Acı Pizza</p>
            
            <p>60₺</p>
          </div>
          <div className="menu-item">
            <img src="../Assets/mile2-aseets/pictures/food-3.png"  alt="useEffect Tavuklu Burger" className="menu-image" />
            <p>useEffect Tavuklu Burger</p>
            <p>60₺</p>
          </div>
        </div>
        </div>
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Teknolojik Yemekler</h3>
            <p>341 Londonderry Road, Istanbul Türkiye</p>
            <p>aciktim@teknolojikyemekler.com</p>
            <p>+90 216 123 45 67</p>
          </div>
          <div className="footer-section">
            <h3>Hot Menu</h3>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Tester Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Instagram</h3>
            <div className="instagram-images">
              <img src="../Assets/mile2-aseets/footer/insta/li-0.png" alt="Instagram Image 1" />
              <img src="./Assets/mile2-aseets/footer/insta/li-1.png" alt="Instagram Image 2" />
              <img src="./Assets/mile2-aseets/footer/insta/li-2.png" alt="Instagram Image 3" />
              <img src="./Assets/mile2-aseets/footer/insta/li-3.png" alt="Instagram Image 4" />
            </div>
          </div>
        </div>
      </footer>
        </div>
  )
}

