import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Form from './components/Form';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Main from "./components/main.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
        <Main/>
      <Form />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
