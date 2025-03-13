import './ArticleCard.css';
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';

const ArticleCard = ({ image, title, avatar, subtitle }) => {
    return (
        <Link className="articleCard"to={`/article/${encodeURIComponent(title)}`}>
            <section className="card">
                <Loader />
                <div className="headingCard">
                    <img className="imageCard" src={image} alt={title} />
                </div>
                <div className="bodyCard">
                    <h3 className="titleCard">{title}</h3>
                </div>
                <div className="footerCard">
                    <img src={avatar} alt={avatar} className="avatar"/>
                    <p className="content">{subtitle}</p>
                    <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
                </div>
            </section>
        </Link>
    );
};

export default ArticleCard

