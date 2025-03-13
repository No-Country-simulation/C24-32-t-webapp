import ArticleCard from "../ArticleCard/ArticleCard";
import articles from "../../data/articles";

const ArticleList = () => {
    return (
        <section className="academySlider">
            {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
            ))}
        </section>
    );
};

export default ArticleList;
