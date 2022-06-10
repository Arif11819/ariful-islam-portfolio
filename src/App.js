import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project' element={<Projects></Projects>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
