import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
// import Dashboard from './components/global/dashboard';
// import BuyerSearch from './components/buyer-dashboard/buyerSearch';
// import RFQManagement from './components/rfq-management/rfq-main';
// import VendorDashboard from './components/vendor-dashboard/vendorDashboard';
// import Quotes from './components/quote-details/quote-main';
import Compare from './components/compare-quotes/compare-main';
// import Search from './components/search-vendors/search-main';

const App: React.FC = () => {

  return(
    <>
    {/* <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/buyer/search/:search' element={<BuyerSearch />} />
          <Route path='/vendor/:id' element={<VendorDashboard/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> */}
    <Compare />
  </>
  
  )
}

export default App;