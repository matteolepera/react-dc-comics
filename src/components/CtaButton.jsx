import "../components/CtaButton.css"

export default function CtaButton({ title }) {
    return (
        <a className="cta-btn">{title}</a>
    );
}