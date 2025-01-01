import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Main />} />
    </Routes>
  </Router>
);

export default App;
