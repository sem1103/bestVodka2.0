import s from './style.module.css'
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { useState, useEffect } from 'react';
export default function Gallery() {
    const [data, setData] = useState([])
    const [card, setCard] = useState([])
    const [currentIndex, setCurrentIndex] = useState(null)
    const baseUrl = import.meta.env.VITE_API_BASE_URL

    useEffect(() => {
        const getData = () => {
            fetch(`${baseUrl}/api/gallery`)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(err => console.log("error", err))
        }
        getData();
    }, [])
    useEffect(() => {
        const getCardData = () => {
            fetch("https://neymanacademy.shop/api/card-section/")
                .then(response => response.json())
                .then(data => setCard(data))
                .catch(err => console.log("error", err))
        }
        getCardData();
    }, [])

    return (
        <>
            <section className={`${s.gallery}`} id='gallery'>
                <div className={`container ${s.gallery__content}`}>
                    <div className={s.left__content}>
                        <h2 className='section__title'>
                            Qalereya
                        </h2>
                        <h3>
                            SHRF kimlər üçündür?
                        </h3>
                        <ul>
                            <li>HR mütəxəssisləri</li>
                            <li>Sahibkar</li>
                            <li>Şirkət rəhbərləri</li>
                            <li>Top menecerlər</li>
                        </ul>
                    </div>

                    <div className={s.right__content}>
                        {data.map((image, index) => (
                            <div className={s.img}>
                                <img
                                    key={index}
                                    src={image.image}
                                    onClick={() => setCurrentIndex(index)}
                                    alt={`Gallery image ${index + 1}`}
                                />
                            </div>
                        ))}

                        {currentIndex !== null && (
                            <Lightbox
                                images={data.map((src) => ({ url: src.image }))}
                                startIndex={currentIndex}
                                onClose={() => setCurrentIndex(null)}
                            />
                        )}
                    </div>
                </div>
            </section>

            <section className={s.features}>
                <div className="container">

                    {card.map((item, index) => {
                        return (
                            <article key={index}>
                                <div className={s.feature__icon}>
                                    <img src={item.icon} alt="" />
                                </div>
                                <h4>
                                    {item.title}
                                </h4>
                                <p>
                                    {item.content}
                                </p>
                            </article>
                        )
                    }).reverse()
                    }
                </div>
            </section>

        </>
    )
}