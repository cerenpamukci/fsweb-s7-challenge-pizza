import React from 'react';
import './SuccessPage.css';
import "./App.jsx"

export default function SuccessPage(props) {
   const {state} = props
  return (
    <div className="success-page">
      <h1>Teknolojik Yemekler</h1>
      <h2><p>TEBRİKLER! </p>
       <p>{JSON.stringify(state)}</p> 
      <p>SİPARİŞİNİZ ALINDI!</p>
      </h2>
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
  );
}

 
