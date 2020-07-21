import React from "react";
import Header from "./Components/Header/header";
import { Nav } from "./Components/Nav/nav";
import { Tabs } from "./Components/tabs/tabs";
import { Footer } from "./Components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Tabs />
      <Footer/>
    </div>
  );
}

export default App;
