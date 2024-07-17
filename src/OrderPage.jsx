import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './OrderPage.css';
import axios from 'axios';

export default function OrderPage(props) {
 const {setter, state} = props;
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const basePrice = 85.50;
  const toppingPrice = 5.00;
  const minToppings = 4;
  const maxToppings = 10;
  const navigate = useNavigate();

  const toppingOptions = [
    'Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak', 'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Jalepeno', 'Kanada Jambonu', 'Domates', 'Biber', 'Kabak'
  ];

  

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleDoughChange = (event) => {
    setDough(event.target.value);
  };

  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (toppings.length < maxToppings) {
        setToppings([...toppings, value]);
        setErrorMessage(''); 
      } else {
        setErrorMessage(`En fazla ${maxToppings} malzeme seçebilirsiniz.`);
      }
    } else {
      setToppings(toppings.filter(topping => topping !== value));
      setErrorMessage('');
    }
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const calculateTotal = () => {
    return (basePrice + toppings.length * toppingPrice) * quantity;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toppings.length < minToppings) {
      setErrorMessage(`Lütfen en az ${minToppings} malzeme seçin.`);
    } else {
      setErrorMessage('');
      navigate('/success');
    }

     axios.post('https://reqres.in/api/pizza', state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  useEffect(()=>{
    setter({size, dough ,toppings,})
  },[note,size,toppings,dough])

  return (
    <div className="order-page">
      <div className="header">
        <h1>Teknolojik Yemekler</h1>
      </div>
      <img src="../Assets/mile2-aseets/pictures/form-banner.png" alt="" />
      <h2>Position Absolute Acı Pizza</h2>
      <p>85.50₺</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Boyut Seç:
            <div>
              <label>
                <input type="radio" value="Küçük" checked={size === 'Küçük'} onChange={handleSizeChange} />
                Küçük
              </label>
              <label>
                <input type="radio" value="Orta" checked={size === 'Orta'} onChange={handleSizeChange} />
                Orta
              </label>
              <label>
                <input type="radio" value="Büyük" checked={size === 'Büyük'} onChange={handleSizeChange} />
                Büyük
              </label>
            </div>
          </label>
          <label>
            Hamur Seç:
            <select value={dough} onChange={handleDoughChange}>
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Kalın">Kalın</option>
            </select>
          </label>
        </div>
        <div>
          <label>Ek Malzemeler <p>En fazla 10 malzeme seçebilirsiniz. 5TL </p></label>
          <div className="toppings-container">
            {toppingOptions.map(topping => (
              <label key={topping}>
                <input type="checkbox" value={topping} checked={toppings.includes(topping)} onChange={handleToppingChange} />
                {topping}
              </label>
            ))}
          </div>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div>
          <label>Sipariş Notu:</label>
          <input type="text" value={note} onChange={handleNoteChange} placeholder="Siparişine eklemek istediğin bir not var mı?" />
        </div>
        <div className="quantity-container">
          <label>Miktar:</label>
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
        </div>
        <div className="total-container">
          <h3>Sipariş Toplamı: {calculateTotal().toFixed(2)}₺</h3>
        </div>
        <button type="submit">Sipariş Ver</button>
      </form>
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

