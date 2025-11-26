import stylemain from "./Main.module.css";
import ComicsDigital from "../assets/img/buy-comics-digital-comics.png";
import ComiscsMerc from "../assets/img/buy-comics-merchandise.png";
import ComicsSubscriptions from "../assets/img/buy-comics-subscriptions.png";
import ComicsShop from "../assets/img/buy-comics-shop-locator.png";
import DcPowerVisa from "../assets/img/buy-dc-power-visa.svg";
import BookCard from "./BookCard";

export default function Main() {
    return (
        <main className={stylemain.background}>
            <div className={stylemain.banner}></div>
            <BookCard />
            <div className={stylemain.wrap}>
                <div className="container">
                    <ul className="d-flex gap-20 justify-between p-30">
                        <li><img src={ComicsDigital} alt="" />DIGITAL COMICS</li>
                        <li><img src={ComiscsMerc} alt="" />DC MERCHANDAISE</li>
                        <li><img src={ComicsSubscriptions} alt="" />SUBSCRIPTION</li>
                        <li><img src={ComicsShop} alt="" />COMIC SHOP LOCATOR</li>
                        <li><img src={DcPowerVisa} alt="" />DC POWER VISA</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}