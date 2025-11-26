import { comics } from "../components/comics"
import BookCardStyle from "../components/BookCard.module.css"

export default function BookCard() {
    const containerClass = `container d-flex justify-center ${BookCardStyle.gap} flex-wrap ${BookCardStyle.content}`
    return (
        <div className={containerClass}>
            {comics.map((comic) =>
                <div className={BookCardStyle.col} key={comic.id}>
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