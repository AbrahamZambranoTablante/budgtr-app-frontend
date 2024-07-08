import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import NotFound from "./Pages/NotFound";
import NavBar from './Components/NavBar';


function App() {

  return (
    <div className='full-container'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/transactions' element={ <Index /> } />
          <Route path='/transactions/:id' element={ <Show /> } />
          <Route path='/transactions/:id/edit' element={ <Edit /> } />
          <Route path='/transactions/new' element={ <New /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
