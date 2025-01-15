import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';
// import Dashboard from './components/UnAuthLandingPage/dashboard';
import BuyerDashboard from './components/buyer-dashboard/buyer-dashboard';

const App: React.FC = () => {

  return(
    <>
      <BuyerDashboard />
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