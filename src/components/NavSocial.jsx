import Facebook from "../assets/img/footer-facebook.png"
import Twitter from "../assets/img/footer-twitter.png"
import Youtube from "../assets/img/footer-youtube.png"
import Pinterest from "../assets/img/footer-pinterest.png"
import Periscope from "../assets/img/footer-periscope.png"

export default function NavSocial() {
    return (
        <nav>
            <ul className="d-flex align-center gap-20">
                <h3 className="text-blu">FOLLOW US</h3>
                <li><a href=""><img src={Facebook} alt="" /></a></li>
                <li><a href=""><img src={Twitter} alt="" /></a></li>
                <li><a href=""><img src={Youtube} alt="" /></a></li>
                <li><a href=""><img src={Pinterest} alt="" /></a></li>
                <li><a href=""><img src={Periscope} alt="" /></a></li>
            </ul>
        </nav>
    )
}