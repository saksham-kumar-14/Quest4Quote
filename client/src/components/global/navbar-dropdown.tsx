import { useState } from 'react';

interface User{
    email: string,
    id: string,
    type: string,
    name: string,
    organizationName: string,
    phone: string,
}

interface props{
    deleteUser: Function,
    user: User
}

const AccountDropdown: React.FC<props> = ({deleteUser, user}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
};

async function handleDeletion() {
    const endPt = localStorage.getItem('endPt');
    await deleteUser(user.id, endPt);
    window.location.reload();
}

function handleLogout(){
    localStorage.clear();
    window.location.reload();
}

return (
    <div className="relative">
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={toggleDropdown}>
            <img src="/src/assets/navbar-authorised/account.png" alt="" className="w-8 h-8" />
        </div>
        {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 text-center h-[250px] bg-[#090D11] shadow-lg py-2 z-20 rounded-b-[25px] mr-[-12px] z-2">
                <a href="#" className="block px-4 py-2 h-[50px] text-[#6AFAA8] bg-[#090D11] font-medium text-sm hover:text-white">My Account</a>
                <a href="#" className="block px-4 py-2 h-[50px] text-[#6AFAA8] bg-[#090D11] font-medium text-sm hover:text-white">RFQ Management</a>
                <a href="#" className="block px-4 py-2 h-[50px] text-[#6AFAA8] bg-[#090D11] font-medium text-sm hover:text-white">RFQ List</a>
                <a href="#" className="block px-4 py-2 h-[50px] text-[#6AFAA8] bg-[#090D11] font-medium text-sm hover:text-white">Quote History</a>
                <a 
                onClick={handleLogout}
                className="block px-4 py-2 h-[50px] text-[#6AFAA8] bg-[#090D11] font-medium text-sm hover:text-white cursor-pointer">Logout</a>
                <a 
                onClick={handleDeletion}
                className="block px-4 py-[14px] h-[50px] text-[#090D11] bg-red-400 font-medium text-sm hover:text-white rounded-b-[25px] cursor-pointer">Delete Account</a>
            </div>
        )}
    </div>
    );
}

export default AccountDropdown;