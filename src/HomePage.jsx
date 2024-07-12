import React from 'react';
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className='home-page'>
<img src="home-banner.png" alt="home-banner.png" className='background-image' />
<div className='content'>
    <h1>Teknolojik Yemekler</h1>
    <h2>KOD ACIKTIRIR PİZZA DOYURUR </h2>
    <Link to ="new-page">
<button className='cta-button'>ACIKTIM</button>
        </Link>

</div>
        </div>
    )
}