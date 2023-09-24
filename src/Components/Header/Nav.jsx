import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex justify-between">
         <div>
            <img src="https://i.ibb.co/XSv3CWQ/Logo.png" alt="" />
         </div>
         <div >
            <NavLink to="/"> Home</NavLink>
            <NavLink to ="/donation"> Donation</NavLink>
            <NavLink to="/statistics"> Statistics</NavLink>
         </div>
        </div>
    );
};

export default Nav;