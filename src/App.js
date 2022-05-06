import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import FavorStatus from './pages/FavorStatus';
import FavorDescription from './pages/FavorDescription';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import FavorRequest from './pages/FavorRequest';
import Demand from './pages/Demand';
import Error from './pages/Error';
import axios from 'axios';

const DEMANDS_URL = 'http://localhost:4000/favors';

const getFavors = async e => {
  var json = [];
  try {
    const json = await axios.get(DEMANDS_URL);
    return json;

  } catch (err) {
    return json;
  }
};

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="favor-status" element={<FavorStatus />} />
        <Route path="favor-description" element={<FavorDescription />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="favor-request" element={<FavorRequest />} />
        <Route path="demand" element={<Demand cards={getFavors()}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}
export default App;
