import BookCardStyle from "../components/BookCard.module.css"
import Badge from "./Badge";

export default function BookCard({ thumb, title, series }) {

    const colClass = `mt-10 ${BookCardStyle.col}`
    return (
        <>
            <Badge />
            <div className={colClass}>
                <img src={thumb} height="200" width="200"
                    alt={title} />
                <h3>{series}</h3>
            </div>
        </ >
    )
}