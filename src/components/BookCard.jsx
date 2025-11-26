import { comics } from "../components/comics"
import BookCardStyle from "../components/BookCard.module.css"
import Badge from "./Badge";

export default function BookCard() {
    const containerClass = `container d-flex justify-center ${BookCardStyle.gap} flex-wrap ${BookCardStyle.content} position-relative`
    const colClass = `mt-10 ${BookCardStyle.col}`
    return (
        <div className={containerClass}>
            <Badge />
            {comics.map((comic) =>
                <div className={colClass} key={comic.id}>
                    <img src={comic.thumb} height="200" width="200"
                        alt={comic.title} />
                    <h3>{comic.series.toUpperCase()}</h3>
                </div>
            )
            }
            <a className={BookCardStyle.a} href="">LOAD MORE</a>
        </div >
    )
}