import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';
// import Dashboard from './components/global/dashboard';
// import BuyerDashboard from './components/buyer-dashboard/buyer-dashboard';
import RFQManagement from './components/rfq-management/rfq-main';

const App: React.FC = () => {

  return(
    <>
      <RFQManagement />
    </>
    // <AuthProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //     </Routes>
    //   </BrowserRouter>
    // </AuthProvider>
  )
}

export default App;