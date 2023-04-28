import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import NavBar from './components/NavBarComponent/NavBar';
import AuthAndConnex from './views/AuthAndConnexView/AuthAndConnex';


function App() {
  return (

    <div className="App">
      <Header />
      <NavBar/>
      <AuthAndConnex/>
      <Footer />
    </div>
  );
}

export default App;
