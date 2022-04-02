import React from "react";

import AppProvider from "providers/AppProvider";
import AppRoutes from "routes/AppRoutes";
import "index.css";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
