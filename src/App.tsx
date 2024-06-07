import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Home from './pages';
import SignIn from './pages/sign-in';

function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/sign-in' element={<SignIn/>}/>
    </Routes>
  </Router>);
}

export default App;
