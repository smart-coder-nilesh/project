import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FinancialModal from './FinancialModal.tsx';
import PaymentMethod from './PaymentMethod.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Admin" element={<FinancialModal />} />
                <Route path="/verify-payment" element={<PaymentMethod />} />
                {/* <Route path="/society-members" element={<SocietyMembers />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/register-guest" element={<RegisterGuest />} />
                <Route path="/help" element={<Help />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
