import About from "./about";
import Basic from "./basic-details";
import ContactDetails from "./contact-details";
import OrgDetails from "./org-details";

const BasicDetails: React.FC = () => {
  return (
    <>
        <div className="grid-rows-2 h-[500px] bg-nonesss w-4/5 max-w-[1200px] -my-16 mx-auto rounded-t-[30pxs]">
            <div className="grid grid-rows-2 h-full gap-2.5 p-3">
                <div className="grid grid-cols-[200px_1fr] gap-2.5">
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-tl-[30px] p-5 bg-[#EBFCE3]"><Basic /></div>
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-tr-[30px] p-5 bg-[#EBFCE3]"><OrgDetails /> </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] p-5 bg-[#EBFCE3]"><ContactDetails /></div>
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] p-5 bg-[#EBFCE3]">
                        <About />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BasicDetails;
