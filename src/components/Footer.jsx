import "./Footer.css";
import CtaButton from "./CtaButton";
import NavSocial from "./NavSocial";

export default function Footer() {
    return (
        <footer>
            <div className="container footer-top d-flex gap-20">
                <ul>
                    <h3>DC COMICS</h3>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Tv</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">News</a></li>
                    <ul className="mt-10">
                        <h3>SHOP</h3>
                        <li><a href="">Shop DC</a></li>
                        <li><a href="">Shop DC Collectibles</a></li>
                    </ul>
                </ul>
                <ul>
                    <h3>DC</h3>
                    <li><a href="">Terms Of Use</a></li>
                    <li><a href="">Privacy policy (New)</a></li>
                    <li><a href="">Ad Choices</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Subscriptions</a></li>
                    <li><a href="">Talent Worshops</a></li>
                    <li><a href="">CPSC Certificates</a></li>
                    <li><a href="">Ratings</a></li>
                    <li><a href="">Shop Help</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <ul>
                    <h3>SITES</h3>
                    <li><a href="">DC</a></li>
                    <li><a href="">MAD Magazine</a></li>
                    <li><a href="">DC Kids</a></li>
                    <li><a href="">DC Universe</a></li>
                    <li><a href="">DC Power Visa</a></li>
                </ul>
            </div>

            <div className="footer-bottom">
                <div className="container d-flex justify-between">
                    <CtaButton />
                    <NavSocial />
                </div>
            </div>
        </footer >
    );
}