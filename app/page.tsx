import React from "react";
import NavBar from "./_components/Header/NavBar";
import Footer from "./_components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Footer
        address="Coming soon"
        phone="07768 437002"
        email="aaronblack1@hotmail.co.uk"
      />
    </div>
  );
};

export default Home;
