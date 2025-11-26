import { comics } from "../components/comics"
import "../components/BookCard.css"

export default function BookCard() {
    return (
        <div className="container d-flex justify-center gap flex-wrap content">
            {comics.map((comic) =>
                <div className="col" key={comic.id}>
                    <img src={comic.thumb} height="200" width="200"
                        alt={comic.title} />
                    <h3>{comic.series.toUpperCase()}</h3>
                </div>

            )
            }

            <a className="btn-load" href="">LOAD MORE</a>
        </div >
    )
}