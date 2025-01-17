import Navbar from '../global/navbar-authorised.tsx';
import Footer from '../global/footer.tsx';
import Header from '../global/header.tsx';
import CreateRFQ from './main-management.tsx';

const RFQManagement: React.FC = () => {
  return (
    <>
    <Navbar list={['Dashboard', 'RFQ management', 'Search Vendors', 'Compare Quotes']} />
    <Header />
    <CreateRFQ />
    {/* <Footer /> */}
    </>
  )
}

export default RFQManagement;