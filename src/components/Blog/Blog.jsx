
import { useState, useEffect, useRef } from "react";
import './Blog.css';

const Blog = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardSliderRef = useRef(null);
    const autoSlideInterval = useRef(null);

const cards = [
    {
                avatar: '/img/avatarBlog01.svg',
                title: '¿Qué es el trading de criptomonedas?',
                description: 'Aprende los conceptos básicos del mercado cripto',
                image: '/img/criptoColor09.svg',
                content: 'Descubre cómo funciona el trading, los tipos de órdenes y las estrategias esenciales para maximizar ganancias.'
            },

            {
                avatar: '/img/avatarBlog02.svg',
                title: 'Top 5 criptomonedas a seguir este año',
                description: 'Proyectos que podrían marcar el futuro del cripto',
                image: '/img/criptoColor08.svg',
                content: 'Analizamos las criptos con mayor potencial, desde Bitcoin hasta proyectos emergentes con tecnología innovadora.'
            },
            {
                avatar: '/img/avatarBlog03.svg',
                title: 'Seguridad en Cripto: Evita Estafas',
                description: 'Protege tu inversión y mantente seguro',
                image: '/img/criptoColor07.svg',
                content: 'Aprende a reconocer estafas, usar wallets seguras y proteger tus fondos en el mundo cripto.'
            },
            {
                avatar: '/img/avatarBlog04.svg',
                title: 'Cómo funcionan los contratos en blockchain',
                description: 'La clave detrás de DeFi, NFT y más',
                image: '/img/criptoColor06.svg',
                content: 'Aprende qué son los smart contracts, cómo automatizan procesos y su impacto en el ecosistema cripto.'
            },
            {
                avatar: '/img/avatarBlog05.svg',
                title: 'Staking vs. Trading: ¿Cuál te conviene?',
                description: 'Estrategias para ganar con criptomonedas',
                image: '/img/criptoColor05.svg',
                content: 'Analizamos las diferencias entre staking y trading para que elijas la mejor opción según tu perfil.'
            },
            {
                avatar: '/img/avatarBlog06.svg',
                title: '¿Qué es el Halving de Bitcoin?',
                description: 'Un evento clave que afecta el precio de BTC',
                image: '/img/criptoColor04.svg',
                content: 'Descubre cómo la reducción a la mitad de las recompensas de minería impacta la oferta, la demanda y del Bitcoin.'
            },
            {
                avatar: '/img/avatarBlog07.svg',
                title: 'NFT: ¿Moda pasajera o revolución digital?',
                description: 'El futuro del arte, los juegos y activos digitales',
                image: '/img/criptoColor03.svg',
                content: 'Exploramos cómo los NFT están evolucionando y si aún vale la pena invertir en ellos.'
            },
            {
                avatar: '/img/avatarBlog08.svg',
                title: 'Guía rápida sobre wallets',
                description: '¿Dónde guardar tus criptomonedas?',
                image: '/img/criptoColor02.svg',
                content: 'Conoce las diferencias entre wallets custodiales y no custodiales, y cuál es la mejor opción según tu perfil.'
            },
            {
                avatar: '/img/avatarBlog09.svg',
                title: 'Cómo funcionan los contratos en blockchain',
                description: 'La clave detrás de DeFi, NFT y más',
                image: '/img/criptoColor01.svg',
                content: 'Aprende qué son los smart contracts, cómo automatizan procesos y su impacto en el ecosistema cripto.'
            }
];

const totalSlides = cards.length;

const updateSlider = () => {
    if (cardSliderRef.current) {
        const cardWidth = cardSliderRef.current.children[0].offsetWidth;
        const offset = -(currentIndex * ( cardWidth - 65 ));
        cardSliderRef.current.style.transition = "transform 0.5s ease-in-out";
        cardSliderRef.current.style.transform = `translateX(${offset}px)`;
    }
};

const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + direction;
        if (newIndex < 0) newIndex = totalSlides - 1;
        if (newIndex >= totalSlides) newIndex = 0;
        return newIndex;
    });
    resetAutoSlide();
};

const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
};

const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    startAutoSlide();
};

useEffect(() => {
    updateSlider();
}, [currentIndex]);

useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
}, []);

return (
        <section className="blogSection" id="blogSection">
            <div className="blogCenter">
                <section className="heading">
                    <h1 className="titleSection">Explora el Mundo Cripto con Nuestro Blog</h1>
                    <p className="text">Mantente al día con las últimas tendencias, análisis y estrategias en el universo de las criptomonedas.</p>
                </section>

                <section className="blogSlider">
                    <div className="blogBlock" ref={cardSliderRef}>
                        {cards.map((card, index) => (
                            <section className="blogCard" key={index}>
                                <div className="headingCard">
                                    <img className="imageCard" src={card.avatar} alt="Ilustración" />
                                    <div className="blogInfo">
                                        <h3 className="titleCard">{card.title}</h3>
                                        <p className="content">{card.description}</p>
                                    </div>
                                </div>
                                <div className="bodyCard">
                                    <div className="backgroundImage">
                                        <img className="imageCard" src={card.image} alt={card.title} />
                                    </div>
                                    <p className="content">{card.content}</p>
                                </div>
                                <div className="footerCard">
                                    <button type="button" className="activeBtn">Ver más</button>
                                </div>
                            </section>
                        ))}
                    </div>
                    <div className="directionArrows">
                        <img className="arrow" id="previousCard" src="/img/flechaIconos01.svg" alt="Arrow left" onClick={() => moveSlide(-1)} />
                        <img className="arrow" id="nextCard" src="/img/flechaIconos02.svg" alt="Arrow Right" onClick={() => moveSlide(1)} />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Blog
