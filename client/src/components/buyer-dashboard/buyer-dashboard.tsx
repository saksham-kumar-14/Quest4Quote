import BuyerHeader from '../global/header.tsx'
import Search from './search-bar.tsx';
import Navbar from '../global/navbar-authorised.tsx';
import BasicDetails from './buyer-basic-details.tsx';
import BuyerHistory from './buyer-history.tsx';
import Footer from '../global/footer.tsx';

const BuyerDashboard: React.FC = () => {
  return (
    <>
    <BuyerHeader />
    <Navbar list={['Dashboard', 'RFQ management', 'Search Vendors', 'Compare Quotes']} />
    <Search />
    <BasicDetails />
    <BuyerHistory />
    <Footer />
    </>
  )
}

export default BuyerDashboard;
