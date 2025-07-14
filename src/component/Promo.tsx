import React from "react";
import "./Promo.css";

interface PromoProps {
    title?: string;
    description?: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
    buttonLink?: string;
}

const Promo: React.FC<PromoProps> = ({
    title = "",
    description = "",
    buttonLabel = "",
    onButtonClick = () => { },
    buttonLink,
}) => (
    <section className="promo">
        <div className="promo__content">
            <h2 className="promo__title">{title}</h2>
            <p className="promo__description">{description}</p>
            {buttonLink ? (
                <a className="promo__button" href={buttonLink} target="_blank" rel="noopener noreferrer">
                    {buttonLabel}
                </a>
            ) : (
                <button className="promo__button" onClick={onButtonClick}>
                    {buttonLabel}
                </button>
            )}
        </div>
    </section>
);

export default Promo;
