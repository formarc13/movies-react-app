import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
