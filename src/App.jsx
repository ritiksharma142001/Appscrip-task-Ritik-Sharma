import React from "react";
import TopNav from "./components/TopNav/TopNav";
import Logo from "./components/Logo/Logo";
import Discover from "./components/Discover/Discover";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import DisplayFilter from "./DisplayFilter";

const App = () => {
  return (
    <>
      <TopNav />
      <Logo />
      <Discover />
      <DisplayFilter />
      <Cart />
      <Footer />
    </>
  );
};

export default App;
