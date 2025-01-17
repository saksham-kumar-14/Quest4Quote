import Navbar from '../global/navbar-authorised.tsx';
import Footer from '../global/footer.tsx';
import Header from '../global/header.tsx';
import CompareQuotes from './compare-container.tsx';

const Compare: React.FC = () => {
  return (
    <>
    <Navbar list={['Dashboard', 'RFQ management', 'Search Vendors', 'Compare Quotes']} />
    <Header />
    <CompareQuotes />
    <Footer />
    </>
  )
}

export default Compare;