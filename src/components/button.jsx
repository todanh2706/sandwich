import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Button({ to, children }) {
    const location = useLocation();
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${(isActive || (location.pathname === "/" && children == "Product"))
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-orange-300 text-gray-800 hover:bg-orange-400"
                }`
            }
        >
            {children}
        </NavLink>
    );
}