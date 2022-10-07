import './App.css';
import { Route,Routes} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';


function App() {
   

  return (
    <div>
    
          <Header/>
          <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/coins/:id' element={<CoinPage/>}/> 
          </Routes>
    
    </div>
    
  );
}

export default App;
