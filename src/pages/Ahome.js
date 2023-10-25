
import React from 'react';
import Cside from '../components/Aside';
import Header from '../components/Header';
import Gallery from '../components/Gallery';


function Chome() {
 
  return (
    <div className="app1">
      <Cside />
        <div className="app-main">
       <Header />
       <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <div class="container">
        <img src="https://www.forbesindia.com/media/images/2022/May/img_184881_sportsmarketing_bg.jpg" alt="alter"className="image" style={{ height: '50% !important' }}/>
        <h1 class="heading"style={{fontFamily: "Itsbeautiful",fontSize:'30px',color:'#3E2540'}}><br></br>United We Play... <br></br>  &emsp;United We Win...</h1>
        </div>
          
        </div>
      </div>
      <br />
      <br />
    <Gallery/>
       
      <br />
      <br />
      <br />
      
    </div></div></div>
  );
}


export default Chome;
