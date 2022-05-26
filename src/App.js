import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Signupdonor from './Components/Signupdonor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signindonor from './Components/Signindonor';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Signupdonor/>}/>
        <Route path="/signin" exact element={<Signindonor/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
