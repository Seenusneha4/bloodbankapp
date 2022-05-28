import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Signupdonor from './Components/Signupdonor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signindonor from './Components/Signindonor';
import Viewdonor from './Components/Viewdonor';
import Searchdonor from './Components/Searchdonor';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" exact element={<Signupdonor/>}/>
        <Route path="/" exact element={<Signindonor/>}/>
        <Route path="/view" exact element={<Viewdonor/>}/>
        <Route path="/" exact element={<Signupdonor/>}/>
        <Route path="/search" exact element={<Searchdonor/>}/>

        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
