import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    // permet de recuperer la route sur laquelle se situe l'utilisateur
    const route = window.location.pathname;

    return (
        <nav className="nav">
            <ul className="nav_list">
                <li
                    className={
                        route === "/" ? "nav_list_item_active" : "nav_list_item"
                    }
                >
                    <Link to="/">Accueil</Link>
                </li>
                <li
                    className={
                        route === "/about"
                            ? "nav_list_item_active"
                            : "nav_list_item"
                    }
                >
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
