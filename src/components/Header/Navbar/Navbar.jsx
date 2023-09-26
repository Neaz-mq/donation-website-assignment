import { NavLink } from "react-router-dom";

import Logo from "./logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-5 md:px-16  ">
                <Logo></Logo>
                <ul className="flex gap-5  mr-3">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donates"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                           Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistic"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>



            </nav>
        </div>
    );
};

export default Navbar;