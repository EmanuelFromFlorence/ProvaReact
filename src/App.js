import React from 'react';
import CarouselComponent from './carousel';

import CardSection from './CardSection';
import CardModel from './CardModel';
import MenuHeader from './MenuHeader';
import Footer from './Footer';
import Bottom_bar from './components/bottom_bar';
import AudioPlayer from './audioplayer'



import './App.css';



const App = () => {
 
  return (
    <div className="App">
      

      <main>
        <MenuHeader/>
        <CarouselComponent />
        <AudioPlayer />
        <CardSection />

        <CardModel />
        <bottom_bar/>
        <Footer/>
      </main>

      
    </div>
  );
};

export default App;


