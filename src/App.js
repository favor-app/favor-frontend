import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import FavorStatus from './pages/FavorStatus';
import FavorDescription from './pages/FavorDescription';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="favor-status" element={<FavorStatus />} />
        <Route path="favor-description" element={<FavorDescription />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Routes>
  );
}
export default App;
