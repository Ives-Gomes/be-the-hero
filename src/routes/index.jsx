import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesComponent;
