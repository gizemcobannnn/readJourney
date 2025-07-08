import './App.css'
import Registration from './pages/Registration'
import Login from './pages/Login';
import Goodjob from "./components/Goodjob"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import Myreading from './pages/Myreading';
import Mylibrary from './pages/Mylibrary';
import AppRoute from './redux/routers/AppRoute';

function App() {
  return (
    <>
     <Header />
     <AppRoute />
     <ToastContainer />
    </>
  )
}

export default App
