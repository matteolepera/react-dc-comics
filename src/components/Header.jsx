import Logo from "../assets/img/dc-logo.png";
import NavHeader from "./NavHeader";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <div className="container d-flex justify-between align-center">
                <a href=""> <img src={Logo} alt="" height="50" /> </a>
                <NavHeader />
            </div>
        </header >
    );
}
