import { Link, useParams } from "react-router-dom";
import articles from "../../data/articles";
import Loader from '../Loader/Loader';
import FooterProfile from "../FooterProfile/FooterProfile";
import "./ArticleDetail.css"

const ArticleDetail = () => {
    const { title } = useParams();
    const article = articles.find((a) => a.title === decodeURIComponent(title));

    if (!article) return <h2>Artículo no encontrado</h2>;

    return (
        <main className="articleDetailContainer">
            <Loader/>
            <section className="articleDetailSection">
                <div className="headingArticle">
                    <div className="subheadingArticle">
                        <h1 className="title">{article.title}</h1>
                        <img className="ilustration" src={article.image} alt={article.title} />
                    </div>
                </div>
                <div className="bodyArticle">
                    <section className="headingBody">
                        <div className="avatarArticle">
                            <img src={article.avatar} alt="Avatar" className="avatar" />
                            <p className="author">{article.author}</p>
                        </div>
                        <div className="icons">
                            <img src="/img/shareIcon.svg" alt="" className="icon" />
                            <img src="/img/heartIcon.svg" alt="" className="icon" />
                        </div>
                    </section>
                    <div className="contentArticle">
                        <h3 className="subtitle" >{article.subtitle}</h3>
                        <p className="text" >{article.content}</p>
                    </div>
                </div>
                <div className="linkAcademySection">
                    <Link className="linkAcademy" to="../academyProfile">
                        <img src="../img/iconoFlechaPlan.svg" alt="" className="iconReturn" />
                        Retornar
                    </Link>
                </div>
            </section>
            <div className="footerAcademy">
                <FooterProfile/>
            </div>
        </main>
    );
};

export default ArticleDetail;
