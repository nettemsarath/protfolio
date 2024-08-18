import React from 'react'
import "./home.css";

import Header from "../Header";
import Footer from "../Footer";
import Body from "../Body";

function Home() {
  return (
    <div className='home' >
        <div>
            <Header />
        </div>
        <div>
            <Body />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
};

export default Home;