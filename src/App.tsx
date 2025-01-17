import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FinancialModal from './FinancialModal.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Admin" element={<FinancialModal />} />
            </Routes>
        </Router>
    );
};

export default App;
