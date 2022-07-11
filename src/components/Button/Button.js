import "./_Button.scss";

export function Button ( {label} ) {
    return (
        <button className="button button--primary">
            {label}
        </button>
    )
}