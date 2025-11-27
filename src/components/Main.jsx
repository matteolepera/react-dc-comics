import stylemain from "./Main.module.css";
import ComicsDigital from "../assets/img/buy-comics-digital-comics.png";
import ComiscsMerc from "../assets/img/buy-comics-merchandise.png";
import ComicsSubscriptions from "../assets/img/buy-comics-subscriptions.png";
import ComicsShop from "../assets/img/buy-comics-shop-locator.png";
import DcPowerVisa from "../assets/img/buy-dc-power-visa.svg";
import BookCard from "./BookCard";
import { comics } from "../components/comics"

export default function Main() {
    return (
        <main className={stylemain.background}>
            <div className={stylemain.banner}></div>
            <div className="container d-flex flex-wrap justify-center position-relative content">
                {comics.map((comic) =>
                    <BookCard
                        key={comic.id}
                        thumb={comic.thumb}
                        title={comic.title}
                        series={comic.series.toUpperCase()} />
                )}
            </div>
            <div className={stylemain.wrap}>
                <div className="container">
                    <ul className="d-flex gap-20 justify-between p-30">
                        <div className="col">

                        </div>
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