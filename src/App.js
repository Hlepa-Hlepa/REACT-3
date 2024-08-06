import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tab1 from './TAB1/Tab1'; // Исправленный путь
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import Tab5 from './components/Tab5';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tab1">Tab 1</Link>
            </li>
            <li>
              <Link to="/tab2">Tab 2</Link>
            </li>
            <li>
              <Link to="/tab3">Tab 3</Link>
            </li>
            <li>
              <Link to="/tab4">Tab 4</Link>
            </li>
            <li>
              <Link to="/tab5">Tab 5</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/tab1" element={<Tab1 />} />
            <Route path="/tab2" element={<Tab2 />} />
            <Route path="/tab3" element={<Tab3 />} />
            <Route path="/tab4" element={<Tab4 />} />
            <Route path="/tab5" element={<Tab5 />} />
            <Route path="/" element={<Tab1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
