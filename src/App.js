import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';
import Login from './pages/Login/Login';
import Movies from './pages/Movies';
import { AuthContextProvider } from './contexts/authContext';
import { HOME,REGISTER,LOGIN,LOGOUT,MOVIES,MOVIES_ADD,MOVIES_EDIT } from "./config/paths"
import Logout from './pages/Logout';
import MoviesAdd from './pages/MoviesAdd';
import MoviesEdit from './pages/MoviesEdit';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'>
            <Route path={REGISTER} element={<Signup />}/>
            <Route path={LOGIN} element={<Login />}/>
          </Route>
          <Route path='/app'>
            <Route path={LOGOUT} element={<Logout />}/>
            <Route path={MOVIES} element={<Movies />}/>
            <Route path={MOVIES_ADD} element={<MoviesAdd />}/>
            <Route path={MOVIES_EDIT} element={<MoviesEdit />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
