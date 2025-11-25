import Logo from "../assets/img/dc-logo.png";
import NavHeader from "./NavHeader";
import "./Header.css";

export default function Header() {
    return (
        <header className="d-flex justify-between align-center">
            <img src={Logo} alt="" height="50" />
            <NavHeader />
        </header>
    );
}
