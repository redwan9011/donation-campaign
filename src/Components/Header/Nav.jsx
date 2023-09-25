import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center py-3 max-w-6xl mx-auto px-4 lg:px-0 ">
         <div>
            <img src="https://i.ibb.co/XSv3CWQ/Logo.png" alt="" />
         </div>
         <div  className="flex gap-3 font-semibold text-xl">
            <NavLink to="/" 
              className={ ({ isActive, isPending ,} ) =>
              isPending ? "pending" : isActive ? "text-red-600 underline " : ""
              
            }
            
            > Home</NavLink>
            <NavLink to ="/donation"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-700 underline " : ""
             }
            > Donation</NavLink>

            <NavLink to="/statistics"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-700 underline " : ""
             }
            > Statistics</NavLink>
         </div>
        </div>
    );
};

export default Nav;