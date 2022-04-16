import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer.jsx';
import Routes from './components/Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
        <div className='container'>
          <Sidebar />
          <Routes />
        </div>
      </BrowserRouter >
    </>
  );
}

export default App;
