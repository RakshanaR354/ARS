import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Chat from './components/Chat';
import Contact from './components/Contact';
import Home from './components/Home';
import Index from './components/Index';
import Learn from './components/LearnMore';
import Monitor from './components/Monitor';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Chat' element={<Chat/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Index' element={<Index/>}/>
    <Route path='/Learn' element={<Learn/>}/>
    <Route path='/Monitor' element={<Monitor/>}/>
  </Routes>
  );
}

export default App;
