import { useEffect, useState } from 'react';
import BuyerUpdateAccountBox from '../buyer-dashboard/buyerUpdateAccount';
import VendorUpdateAccountBox from '../vendor-dashboard/vendorUpdateAccountBox';

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
    const[updationBox, setUpdationBox] = useState("");
    const [containerClass, setContainerClass] = useState("relative z-10");

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

    useEffect(()=> {
        if(updationBox == "buyer" || updationBox == "vendor"){
            setContainerClass("relative -z-1");
        }else setContainerClass("relative z-1");
    }, [updationBox])

return (
    <div>
        {updationBox == "buyer" &&
            <BuyerUpdateAccountBox setUpdationBox={setUpdationBox} />
        } 
        {updationBox == "vendor" &&
            <VendorUpdateAccountBox setUpdationBox={setUpdationBox} />
        }
    <div className={containerClass}>
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={toggleDropdown}>
            <img src="/src/assets/navbar-authorised/account.png" alt="" className="w-8 h-8" />
        </div>
        {isDropdownOpen && (
            <div className="">
                <a
                onClick={() => {
                    if(user && user.type == "buyer"){
                        if(updationBox == "buyer")setUpdationBox("");
                        else setUpdationBox("buyer");
                    }else if(user && user.type == "vendor"){
                        if(updationBox == "vendor"){
                            setUpdationBox("")
                        }else setUpdationBox("vendor")
                    }
                }}
                className="cursor-pointer block px-4 py-2 h-[50px] text-[#6AFAA8] bg-[#090D11] font-medium text-sm hover:text-white">
                    My Account
                </a>
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
    </div>
    );
}

export default AccountDropdown;