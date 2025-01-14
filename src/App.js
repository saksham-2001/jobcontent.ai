import react from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from "./homepage";
import Coverletter from "./coverletter";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coverletter" element={<Coverletter/>}/>
      </Routes>
    </Router>
  );
}
