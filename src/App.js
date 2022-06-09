import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Project from './Pages/Project';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
