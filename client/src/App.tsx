import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Dashboard from './components/global/dashboard';
import RFQManagement from './components/rfq-management/rfq-main';
import ManageQuotes from './components/quote-details/main';
import Quotes from './components/quote-details/qd-main';
// import RFQManagement from './components/rfq-management/rfq-main';

const App: React.FC = () => {

  return(
    <>
    
    {/* <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> */}
      <Quotes />
    </>
  
  )
}

export default App;