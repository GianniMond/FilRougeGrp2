import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import NavBar from './components/NavBarComponent/NavBar';
import TeamList from './views/TeamListView/TeamList';




function App() {
  return (
   
    <div className="App">
      <Header />
      <NavBar/>
      <Footer />
    </div>

  );
}

export default App;

