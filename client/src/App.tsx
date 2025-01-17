import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Dashboard from './components/global/dashboard';
import RFQManagement from './components/rfq-management/rfq-main';
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
      <RFQManagement />
    </>
  
  )
}

export default App;