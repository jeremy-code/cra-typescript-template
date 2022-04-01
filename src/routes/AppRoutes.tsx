import React from "react";
import { Routes, Route } from "react-router-dom";

import { Landing, RouteError } from "features/misc";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<RouteError />} />
    </Routes>
  );
};

export default AppRoutes;
