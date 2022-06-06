import SideBarBody from "./SideBarBody/SideBarBody";
import SideBarFooter from "./SideBarFooter/SideBarFooter";
import SideBarHeader from './SideBarHeader/SideBarHeader';


export default function SideBar({chatHeaders}){
    return(
        <div className="p-3 text-white bg-dark sideBar" style={{width: 400}}>
            <SideBarHeader/>
            <hr />
            <SideBarBody chatHeaders = {chatHeaders}/>
            <hr />
            <SideBarFooter/>
        </div>
    );
}