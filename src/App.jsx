import React from "react";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Comments from "./components/Comments/index.jsx";

const App = () => {
   return (
      <div className="App wrapper">
         <Header />
         <Main />
         <Comments />
         <Footer />
      </div>
   );
};

export default App;
