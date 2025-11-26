import styleheader from "./NavHeader.module.css";
import { navLinks } from "./navLinks";

export default function NavHeader() {
    return (
        <nav className={styleheader.link}>
            <ul className="d-flex justify-between gap-20">
                {navLinks.map((link) => (
                    <li className={`${link.active ? styleheader.active : ""}`} key={link.id} >
                        <a href="">{link.titolo}</a>
                    </li>
                ))}
            </ul>
        </nav >
    );
}