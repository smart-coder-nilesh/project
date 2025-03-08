import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FinancialModal from './FinancialModal.tsx';
import PaymentMethod from './PaymentMethod.tsx';
import { Provider } from 'react-redux';
import { store } from './Store/store.ts';
import LoginPage from './Login/Login.tsx';
import { AuthProvider } from "./authorization/AuthContext";

const App: React.FC = () => {
    return (
        <>

        <AuthProvider>
            
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Admin" element={<FinancialModal />} />
                    <Route path="/verify-payment" element={<PaymentMethod />} />
                    {/* <Route path="/society-members" element={<SocietyMembers />} />
                    <Route path="/parking" element={<Parking />} />
                    <Route path="/register-guest" element={<RegisterGuest />} /> */}
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </Provider>
        </AuthProvider>
        </>

    );
};

export default App;
