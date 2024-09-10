import s from './style.module.css'
import { useEffect, useState } from 'react'
export default function ForumInfo() {
    const [data, setData] = useState([])
    const baseUrl=import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        const getData = () => {
            fetch(`${baseUrl}/api/about-forum`)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(err => console.log("error", err))
        }
        getData();
    }, [])
    return (
        <section className={s.forum__info} id='forum'>
            <article className='container'>

                {data.map((item, index) => {
                    return (
                        <div className={s.left__content} key={index}>
                            <img src={item.image_1} alt="" className={s.main__img} />
                            <img src={item.image_2} alt="" className={s.other_img} />
                            <img src={item.image_3} alt="" className={s.other_img} />
                        </div>
                    )
                })}

                {data.map((item, index) => {
                    return (
                        <div className="right__content" key={index}>
                            <h2 className='section__title'>{item.title}</h2>
                            <h3 className='sub__title'>{item.purpose}</h3>
                            {item.content.split('\r\n\r\n').map((paragraph, i) => (
                            <div key={i} className={i === item.content.split('\r\n\r\n').length - 1 ? s.lastParagraph : s.paragraph}>
                                {paragraph.split('\r\n').map((line, j) => (
                                    <p key={j}>{line}</p>
                                ))}
                            </div>
                        ))}
                        </div>
                    )

                })}

            </article>
        </section>
    )
}