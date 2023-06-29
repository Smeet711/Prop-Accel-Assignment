import React from "react";
import Navbar from "./components/Navbar";
import './index.css'
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Plan from "./components/Plan";
import Cards from "./components/Cards";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return <>

<Navbar/>
<HeroBanner/>
<About/>
<Plan/>
<Cards/>
<Reviews/>
<Footer/>

  </>;
};

export default App;
