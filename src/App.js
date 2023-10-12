import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Guru from './pages/guru/Guru';
import Session from "./pages/session/Session"
import Signup from "./pages/signup/Signup";
import Update from "./pages/update/Update";
import Login from "./pages/login/Login"
import Createsession from './pages/createsession/Createsession';
import Profile from './pages/profile/Profile';
import Userprofile from './pages/userprofile/Userprofile';
import Profileupdate from './pages/profileupdate/Profileupdate';
import Uploadimage from './components/uploadimage/Uploadimage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signup"
          element={ <Signup />}
        />
        <Route
          path="/login"
          element={ <Login /> }
        />
        <Route
          path="/profile"
          element={<Profile /> }
        />
        <Route
          path="/userprofile"
          element={<Userprofile /> }
        />
        <Route 
          path="/expert" 
          element={<Guru />} 
        />
        <Route 
          path="/update" 
          element={<Update />} 
        />
        <Route 
          path="/createsession" 
          element={<Createsession />} 
        />
        <Route 
          path="/profile/update" 
          element={<Profileupdate />} 
        />
        <Route path="/session" 
          element={<Session />} 
        />
        <Route path="/uploadimage" 
          element={<Uploadimage />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
