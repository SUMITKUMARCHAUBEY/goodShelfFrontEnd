import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png'

function App() {
  const [kidsProducts, setKidsProducts] = useState([]);
  const [valueDealsProducts, setValueDealsProducts] = useState([]);
  const [milletsAltProducts, setMilletsAltProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for Kids products
        const responseKids = await fetch('http://localhost:5000/Products/Kids');
        if (!responseKids.ok) {
          throw new Error('Error fetching Kids products');
        }
        const dataKids = await responseKids.json();
        setKidsProducts(dataKids);

        // Fetch data for ValueDeals products
        const responseValueDeals = await fetch('http://localhost:5000/Products/ValueDeals');
        if (!responseValueDeals.ok) {
          throw new Error('Error fetching ValueDeals products');
        }
        const dataValueDeals = await responseValueDeals.json();
        setValueDealsProducts(dataValueDeals);

        // Fetch data for MilletsAlt products
        const responseMilletsAlt = await fetch('http://localhost:5000/Products/MilletsAlt');
        if (!responseMilletsAlt.ok) {
          throw new Error('Error fetching MilletsAlt products');
        }
        const dataMilletsAlt = await responseMilletsAlt.json();
        setMilletsAltProducts(dataMilletsAlt);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
  return (
    <div className="App">
      <div className='headder'>
        <img src={logo} width={"130px"} height={"55px"} style={{margin:"20px"}} alt="" />
      </div>
      <div>
      <p className='sliderHead'>Value Deals</p>
      <div className="slider">
     
      {valueDealsProducts && valueDealsProducts.map((product) => (
        
        <div key={product.id} className='card'>
        <div className='imgCont'>
        <img src={`https://drive.google.com/uc?export=view&id=${product.imgLink}`} alt='not found' style={{margin:"-5px",height:"100%"}}/>
        </div>
        <div className='contDesc'>
          <span className='ItmTitle'>{product.name}</span>
          <span className='liner'>{product.desc}</span>

          <div className='buy'>
            <span>{product.rate} /<span style={{color:"#7b7b7b"}}> {product.unit}</span></span>
            <button style={{color:"#f64162",border:"#f64162 solid 2px",borderRadius:"4px", width:"30px",height:"120%"}}>+</button>
          </div>

        </div>
          
        </div>
        ))}

      </div>
      <p className='sliderHead'>Kids Friendly</p>
      <div className="slider">
     
      {kidsProducts && kidsProducts.map((product) => (
         <>
         
         {/* <p> {`https://drive.google.com/uc?export=view&id=${product.imgLink}`}</p> */}
        <div key={product.id} className='card'>
        <div className='imgCont'>
        <img src={`https://drive.google.com/uc?export=view&id=${product.imgLink}`} alt='not found' style={{margin:"-5px",height:"100%"}}/>
     
        </div>
        <div className='contDesc'>
          <span className='ItmTitle'>{product.name}</span>
          <span className='liner'>{product.desc}</span>

          <div className='buy'>
            <span>{product.rate} /<span style={{color:"#7b7b7b"}}> {product.unit}</span></span>
            <button style={{color:"#f64162",border:"#f64162 solid 2px",borderRadius:"4px", width:"30px",height:"120%"}}>+</button>
          </div>

        </div>
          
        </div>
        </>
        ))}

      </div>
      <p className='sliderHead'>Millet Alternatives</p>
      <div className="slider">
     
      {milletsAltProducts && milletsAltProducts.map((product) => (
        
        <div key={product.id} className='card'>
        <div className='imgCont'>
        <img src={`https://drive.google.com/uc?export=view&id=${product.imgLink}`} alt='not found' style={{margin:"-5px",height:"100%"}}/>
        </div>
        <div className='contDesc'>
          <span className='ItmTitle'>{product.name}</span>
          <span className='liner'>{product.desc}</span>

          <div className='buy'>
            <span>{product.rate} /<span style={{color:"#7b7b7b"}}> {product.unit}</span></span>
            <button style={{color:"#f64162",border:"#f64162 solid 2px",borderRadius:"4px", width:"30px",height:"120%"}}>+</button>
          </div>

        </div>
          
        </div>
        ))}

      </div>
      </div>
    </div>
  );
}

export default App;
