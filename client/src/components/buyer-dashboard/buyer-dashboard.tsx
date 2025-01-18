import BuyerHeader from '../global/header.tsx'
import Search from './search-bar.tsx';
import Navbar from '../global/navbar-authorised.tsx';
import BasicDetails from './buyer-basic-details.tsx';
import BuyerHistory from './buyer-history.tsx';
import Footer from '../global/footer.tsx';
import { useAuth } from '../../Context/AuthContext.tsx';

const BuyerDashboard: React.FC = () => {

  const { user, 
    isLoggedIn, 
    setUser, 
    setIsLoggedIn,
    login,
    logout,
    deleteUser
  } = useAuth();

  return (
    <>
    <BuyerHeader />
    <Navbar 
      user={user} 
      deleteUser={deleteUser}
      list={
        [{
            name: "Dashboard",
            url: "/",
        }, {
            name: 'RFQ management', 
            url: "/",
        },{
            name: 'Search Vendors',
            url: "/"
        },{
            name: 'Compare Quotes',
            url: "/"
        }]
      }
    />
    <Search />
    <BasicDetails user={user} />
    <BuyerHistory />
    <Footer />
    </>
  )
}

export default BuyerDashboard;
