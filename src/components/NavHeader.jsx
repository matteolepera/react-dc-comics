import style from "./NavHeader.module.css";


export default function NavHeader() {
    return (
        <nav className={style.link}>
            <ul className="d-flex justify-between gap-10">
                <li><a href="">CHARACTERS</a></li>
                <li className={style.active}><a href="">COMICS</a></li>
                <li><a href="">MOVIES</a></li>
                <li><a href="">TV</a></li>
                <li><a href="">GAMES</a></li>
                <li><a href="">COLLECTIBLES</a></li>
                <li><a href="">VIDEOS</a></li>
                <li><a href="">FANS</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">SHOP</a></li>
            </ul>
        </nav>
    );
}