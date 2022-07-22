import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './contexts/authContext';
import { APP,REGISTER,LOGIN,LOGOUT,MOVIES_ADD,MOVIES_EDIT } from "./config/paths"

/* COMPONENTS */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Navbar";
import Signup from './pages/Signup';
import Login from './pages/Login/Login';
import Movies from './pages/Movies';
import Logout from './pages/Logout';
import MoviesAdd from './pages/MoviesAdd';
import MoviesEdit from './pages/MoviesEdit';
import PublicRoute from './components/router/PublicRoute';
import PrivateRoute from './components/router/PrivateRoute';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<PublicRoute />}>
            <Route path={LOGIN} element={<Login />}/>
            <Route path={REGISTER} element={<Signup />}/>
          </Route>
          <Route path={APP} element={<PrivateRoute />}>
            <Route index element={<Movies />}/>
            <Route path={LOGOUT} element={<Logout />}/>
            <Route path={MOVIES_ADD} element={<MoviesAdd />}/>
            <Route path={MOVIES_EDIT} element={<MoviesEdit />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
