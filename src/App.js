import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './bootstrap.min.css'
import Restaurantlist from './Components/Restaurantlist';
import Viewrest from './Components/Viewrest'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
 <Header/>
 <Routes>
  <Route path='/' element={<Restaurantlist/>}/>
  <Route path='/viewrest/:id' element={<Viewrest/>}/>
 </Routes>

      </header>
      <Footer/>
    </div>
  );
}

export default App;
