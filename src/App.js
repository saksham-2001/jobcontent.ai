import react from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from "./homepage";
import CoverLetterTemplate from "./coverlettertemplate";
import CoverLetterEditor from "./coverlettereditor";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coverlettertemplate" element={<CoverLetterTemplate/>}/>
        <Route path="/coverlettereditor" element={<CoverLetterEditor/>}/>
      </Routes>
    </Router>
  );
}
