import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, NewTurtle, Turtles, TurtleHome } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/turtles" element={<Turtles />} />
      <Route path="/" element={<Home />} />
      <Route path="/newturtle" element={<NewTurtle />} />
      <Route path="/turtlehome" element={<TurtleHome />} />
    </Routes>
  );
};
