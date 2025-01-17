import Navbar from '../global/navbar-authorised.tsx';
import Footer from '../global/footer.tsx';
import Header from '../global/header.tsx';
import ManageQuotes from './quote-container.tsx';

const Quotes: React.FC = () => {
  return (
    <>
    <Navbar list={['Dashboard', 'RFQ management', 'Search Vendors', 'Compare Quotes']} />
    <Header />
    <ManageQuotes />
    <Footer />
    </>
  )
}

export default Quotes;