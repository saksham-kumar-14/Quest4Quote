import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';
// import Dashboard from './components/global/dashboard';
// import BuyerSearch from './components/buyer-dashboard/buyerSearch';
// import RFQManagement from './components/rfq-management/rfq-main';
import Quotes from './components/quote-details/qd-main';
// import VendorDashboard from './components/vendor-dashboard/vendorDashboard';

const App: React.FC = () => {

  return(
    <>
    
    {/* <AuthProvider> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/buyer/search/:search' element={<BuyerSearch />} />
          <Route path='/vendor/:id' element={<VendorDashboard/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> */}

      <Quotes />
    </>
  
  )
}

export default App;