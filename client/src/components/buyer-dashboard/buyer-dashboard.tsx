import BuyerHeader from './buyer-header.tsx'
import Search from './search-bar.tsx';
import Navbar from '../global/navbar-authorised.tsx';
import BasicDetails from './buyer-basic-details.tsx';

const BuyerDashboard: React.FC = () => {
  return (
    <>
    <BuyerHeader />
    <Navbar />
    <Search />
    <BasicDetails />
    </>
  )
}

export default BuyerDashboard;
