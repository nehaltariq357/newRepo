import React, { useState } from 'react';
import Cards from './Components/Cards';
import Data from './Data';
import Nav from './Components/Nav';
import First_image from './Components/First_image';
import Banner from './Components/Banner';
import Text from './Components/Text';
import Banner1 from './Components/Banner1';
import Text1 from './Components/Text1';
import Footer from './Components/Footer';
import CardDetails from './Components/CardDetails'; 

import './App.css'; 

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeCardDetails = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <Nav />
      <First_image />
      <Banner />
      <Text />

      <div className="flex-container">
        {Data.map((val) => (
          <Cards
            key={val.title}
            imgsrc={val.image_url}
            price={val.price}
            title={val.title}
            des={val.description}
            onClick={() => handleCardClick({ title: val.title, description: val.description, price: val.price })}
          />
        ))}
      </div>

      <Banner1 />
      <Text1 />
      <div className="flex-container">
        {Data.map((val) => (
          <Cards
            key={val.title}
            imgsrc={val.image_url}
            price={val.price}
            title={val.title}
            des={val.description}
            onClick={() => handleCardClick({ title: val.title, description: val.description, price: val.price })}
          />
        ))}
      </div>
      <div className="flex-container">
        {Data.map((val) => (
          <Cards
            key={val.title}
            imgsrc={val.image_url}
            price={val.price}
            title={val.title}
            des={val.description}
            onClick={() => handleCardClick({ title: val.title, description: val.description, price: val.price })}
          />
        ))}
      </div>

      <Footer />
      <h1>Here Show The Details</h1>

    
      <CardDetails selectedCard={selectedCard} onClose={closeCardDetails} />
    </>
  );
}

export default App;
