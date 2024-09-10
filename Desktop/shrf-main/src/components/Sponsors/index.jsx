import { useEffect, useState } from 'react';
import s from './style.module.css';

export default function Sponsor() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = () => {
            fetch("https://neymanacademy.shop/api/partners/")
                .then(response => response.json())
                .then(data => setData(data))
                .catch(err => console.log("error", err))

        }
        getData();
    }, [])



    return (
        <section className={`${s.sponsor__section} `} id='sponsors'>
            <h2 className='section__title'>
                Sponsorlar
            </h2>
            <div className="container">
                <ul className={s.main__sponsors}>
                    {data.length && (<>
                        <li><a href={data[data.length - 1].website_link} target='_blank'><img src={data[data.length - 1].image} alt="" /></a></li>
                    </>)}



                </ul>
                <ul className={s.other__sponsors}>
                    {data.slice(0, data.length - 1).map((item, index) => (
                        <li key={index}><a href={item.website_link} target='_blank'><img src={item.image} alt="" /></a></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}