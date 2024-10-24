import React from "react";
import Navbar from "../app/components/Navbar";
import Card from "./components/Card";
import Carosusel from "./components/Carosusel";
import Progressor from "./components/Progressor";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import Menuitem from "./components/Menuitem";

export default function App() {
   return (
    <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen text-white">
      <Navbar  />
      <Carosusel /> 
      <Progressor /> 
      <Banner/>
      <ProductList />
      <Menuitem/>
      <Offer />  
      <Card/>
      < Reservation /> 
      <Footer />
      <Testimonals />
      

      
    </div>
   )
}