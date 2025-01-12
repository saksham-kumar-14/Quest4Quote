import './buyer-dashboard.css'
import BuyerHeader from './buyer-header.tsx'
import Search from './search-bar.tsx';

const BuyerDashboard: React.FC = () => {
  return (
    <>
    <BuyerHeader />
    <Search />
    </>
  )
}

export default BuyerDashboard
