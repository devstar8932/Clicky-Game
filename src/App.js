import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <div>
      <Container image={"././public/images/angelfish"} />
      <Container />
      <Container />
      <Container />     
    </div>  
    <div>
      <Container />
      <Container />
      <Container />
      <Container />     
    </div>  
    <div>
      <Container />
      <Container />
      <Container />
      <Container />     
    </div>  
  <Footer />
  </div>
);

export default App;