/* ES6 module in Node.js environment */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./Landing";


function App() {



  return (
    <div className="wrapper content">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
