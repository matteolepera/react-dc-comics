import Logo from "./Logo";
import NavHeader from "./NavHeader";
import "./Header.css";

export default function Header() {
    return (
        <header className="d-flex justify-between align-center">
            <Logo />
            <NavHeader />
        </header>
    );
}
