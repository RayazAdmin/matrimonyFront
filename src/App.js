import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';  
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Registration from './components/pages/registration';
import Homepage from './components/pages/Homepage';
import Freesearch from './components/pages/freesearch';
import Contact from './components/pages/contact';
import Payment from './components/pages/payment';
import Member from './components/pages/member';
import Footer from './components/pages/footer';
import Header from './components/pages/header';
import Services from './components/pages/services';
import Modal from './components/pages/modal';
import Sidebar from './components/pages/sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/freesearch' element={<Freesearch />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/member' element={<Member />} />
          <Route path='/services' element={<Services />} />
          <Route path='/modal' element={<Modal />} />
          
          
        </Routes>
        < Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
