import BuyerHeader from './buyer-header.tsx'
import Search from './search-bar.tsx';
import Navbar from '../global/navbar-authorised.tsx';

const BuyerDashboard: React.FC = () => {
  return (
    <>
    <BuyerHeader />
    <Navbar />
    <Search />
    </>
  )
}

export default BuyerDashboard
