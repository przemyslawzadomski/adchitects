import "./Testmonial.scss";

export function Testimonial ( {text, author} ) {
    return (
        <div className="testimonial">
            <img src="/assets/quotation-mark.svg" alt="quotation mark"/>
            <p className="testimonial__text">
                {text}
            </p>
            <span className="testimonial__author">
                {author}
            </span>
        </div>
    )
}