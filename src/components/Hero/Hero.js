import "./Hero.scss";

export function Hero ( {text, imgUrl} ) {
    return (
        <div className="hero">
            <p className="hero__text">
                {text}
            </p>
            <img src={imgUrl} alt="Hero image" className="hero__img"/>
        </div>
    )
}