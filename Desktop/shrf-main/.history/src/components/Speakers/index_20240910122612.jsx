import { useEffect, useState } from 'react'
import s from './style.module.css'
import { FaRegStar } from "react-icons/fa";
import networking from '../../assets/img/networking.png'
import discussion from '../../assets/img/discussion.png'
export default function Speakers() {
    const [speakers, setSpeakers] = useState([])
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    useEffect(() => {
        const getData = () => {
            fetch(`${baseUrl}/api/spikers`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    setSpeakers(data)
                })
                .catch(err => console.log("err", err))
        }
        getData();
    }, [])



    const speakerItem = (speaker) => {
        return <div className={s.speaker__item}>
            <img src={speaker.image} alt="" />
            <h5>{speaker.fullname}</h5>
            <h6>{speaker.position_1}</h6>
            {speaker.position_2 && <p>{speaker.position_2}</p>}
            <div className={s.soc__icons}>
                {
                    speaker.facebook && (
                        <button className={s.soc__icon}>
                            <a href={speaker.facebook} className={s.soc__link} target='_blank'></a>
                            <span className={s.svgContainer}>
                                <svg
                                    viewBox="0 0 24 24"
                                    height="20"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </span>
                            <span className={s.BG}></span>

                        </button>
                    )

                }
                {speaker.instagram && (
                    <button className={`${s.soc__icon} ${s.insta}`}>
                        <a href={speaker.instagram} className={`${s.soc__icon} ${s.insta}`} target='_blank'> </a>
                        <span className={s.svgContainer}>
                            <svg
                                fill="white"
                                className="svgIconinsta"
                                viewBox="0 0 448 512"
                                height="1.5em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"
                                ></path>
                            </svg>
                        </span>

                        <span className={s.BG}></span>

                    </button>
                )}
                {speaker.linkedIn && (
                    <button className={`${s.soc__icon} ${s.linked}`}>
                        <a href={speaker.linkedIn} className={`${s.soc__link} ${s.linked}`} target='_blank'></a>
                        <span>
                            <svg
                                viewBox="0 0 24 24"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                ></path>
                            </svg>
                        </span>
                        <span className={s.BG}></span>
                    </button>
                )}

            </div>

        </div>
    }



    return (
        <section className={`${s.speakers} container`} id='speakers'>
            <h2 className='section__title'>
                Spikerlər
            </h2>

            <div className={s.sub__box}>
                <div className={s.icon}><FaRegStar /></div>
                <h3 className='sub__title'>
                    Strateji HR trendləri
                </h3>
                <p>Strateji HR ilə bağlı fikirlər və təcrübələrlə tanışlıq</p>
            </div>

            <div className={s.speaker__items}>
                {
                    speakers.map(speaker => {
                        if (speaker.spiker_type == "hr_1") {
                            return speakerItem(speaker)
                        }

                    }).reverse()
                }
            </div>
            <div className={s.sub__box}>
                <div className={s.icon}><img src={discussion} alt="" /></div>
                <h3 className='sub__title'>
                    CEO-ların gözündə HR
                </h3>
                <p>Müzakirələr vasitəsilə strateji HR ilə bağlı önəmli suallara cavabların tapılması</p>
            </div>



            <div className={s.speaker__items}>

                {
                    speakers.map(speaker => {
                        if (speaker.spiker_type == 'hr_2') {
                            return speakerItem(speaker)
                        }
                    }).reverse()
                }
            </div>
            <div className={s.sub__box}>
                <div className={s.icon}><img src={networking} alt="err" /></div>
                <h3 className='sub__title'>
                    Performansı necə yüksəldək?
                </h3>
                <p>Biznes adamları ilə networking imkanı</p>
            </div>





            <div className={s.speaker__items}>
                {
                    speakers.map(speaker => {
                        if (speaker.spiker_type == 'hr_3') {
                            return speakerItem(speaker)
                        }
                    }).reverse()
                }
            </div>
        </section>
    )
}