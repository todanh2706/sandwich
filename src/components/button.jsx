import { Link } from "react-router-dom";

export default function Button({ to, children }) {
    return (
        <Link
            to={to}
            className="px-6 py-2 rounded-full bg-orange-300 text-gray-800 font-semibold hover:bg-orange-400 transition-colors duration-200"
        >
            {children}
        </Link>
    );
}