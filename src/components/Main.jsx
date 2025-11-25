import style from "./Main.module.css";

export default function Main() {
    const contentText = `container ${style.content}`
    return (
        <main className={style.background}>
            <div className={contentText}>
                <h2>--&gt; Content goes here &lt;--</h2>
            </div>
        </main>
    );
}