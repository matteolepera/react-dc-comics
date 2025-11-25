import style from "./Main.module.css";
import ComicsDigital from "../assets/img/buy-comics-digital-comics.png"
import ComiscsMerc from "../assets/img/buy-comics-merchandise.png"
import ComicsSubscriptions from "../assets/img/buy-comics-subscriptions.png"
import ComicsShop from "../assets/img/buy-comics-shop-locator.png"
import DcPowerVisa from "../assets/img/buy-dc-power-visa.svg"

export default function Main() {
    const contentText = `container ${style.content}`;
    return (
        <main className={style.background}>
            <div className={contentText}>
                <h2>--&gt; Content goes here &lt;--</h2>
            </div>
            <div className={style.wrap}>
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